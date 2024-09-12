from skimage.graph import route_through_array
import xarray as xr
import numpy as np
import os
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

def get_closest(array, value):
    return np.abs(array - value).argmin()

path = "data\GLOBAL_ANALYSISFORECAST_WAV_001_027"
file_waves = os.path.join(path, "mfwamglocep_2023062000_R20230621_12H.nc")
path_physics = "data\GLOBAL_ANALYSISFORECAST_PHY_001_024"
file_physics = os.path.join(
    path_physics, "glo12_rg_1d-m_20230620-20230620_3D-uovo_hcst_R20230628.nc"
)

dataset_waves = xr.open_dataset(file_waves)
dataset_physics = xr.open_dataset(file_physics)

time_slice = 0

def calculate_dynamic_bbox(start_lat, start_lon, end_lat, end_lon, padding=25):
    """
    Calculate a dynamic bounding box based on start and end coordinates.
    padding: degrees to add around the area (default 5 degrees)
    """
    min_lon = min(start_lon, end_lon) - padding
    max_lon = max(start_lon, end_lon) + padding
    min_lat = min(start_lat, end_lat) - padding
    max_lat = max(start_lat, end_lat) + padding
    
    # Ensure the bbox is within the dataset bounds
    min_lon = max(min_lon, dataset_waves.longitude.min().item())
    max_lon = min(max_lon, dataset_waves.longitude.max().item())
    min_lat = max(min_lat, dataset_waves.latitude.min().item())
    max_lat = min(max_lat, dataset_waves.latitude.max().item())
    
    return ((min_lon, min_lat), (max_lon, max_lat))

def prepare_cost_matrix(bbox):
    # Get indices of the bbox
    lon_min = get_closest(dataset_waves.longitude.data, bbox[0][0])
    lat_min = get_closest(dataset_waves.latitude.data, bbox[0][1])
    lon_max = get_closest(dataset_waves.longitude.data, bbox[1][0])
    lat_max = get_closest(dataset_waves.latitude.data, bbox[1][1])

    wave_height = dataset_waves.VHM0.isel(
        time=time_slice, longitude=slice(lon_min, lon_max), latitude=slice(lat_min, lat_max)
    )
    wind_wave_height = dataset_waves.VHM0_WW.isel(
        time=time_slice, longitude=slice(lon_min, lon_max), latitude=slice(lat_min, lat_max)
    )
    northward_velocity = dataset_physics.vo.isel(
        time=time_slice,
        depth=0,
        longitude=slice(lon_min, lon_max),
        latitude=slice(lat_min, lat_max),
    )
    eastward_velocity = dataset_physics.uo.isel(
        time=time_slice,
        depth=0,
        longitude=slice(lon_min, lon_max),
        latitude=slice(lat_min, lat_max),
    )

    costs = (
        wave_height.data
        + wind_wave_height.data
        + eastward_velocity.data
        + northward_velocity.data
    )
    # Set NaN values to large costs as the algorithm cannot handle NaNs
    costs[np.isnan(costs)] = 2 * np.nanmax(costs)

    return costs, wave_height

def lat_lon_to_coordinates(indices, lat_data, lon_data):
    return [[lon_data[lon], lat_data[lat]] for lat, lon in zip(indices[0], indices[1])]

def create_geojson(coordinates):
    geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {"type": "MultiLineString", "coordinates": [coordinates]},
                "properties": {},
            }
        ],
    }
    return geojson

@app.route("/get_route", methods=["POST"])
def get_route():
    data = request.json
    start_lat = data.get("startLat")
    end_lat = data.get("endLat")
    start_lon = data.get("startLon")
    end_lon = data.get("endLon")

    # Calculate dynamic bbox
    bbox = calculate_dynamic_bbox(start_lat, start_lon, end_lat, end_lon)

    # Prepare cost matrix based on dynamic bbox
    costs, wave_height = prepare_cost_matrix(bbox)

    # Convert global coordinates to local indices within the bbox
    start_lon_idx = get_closest(wave_height.longitude.data, start_lon)
    start_lat_idx = get_closest(wave_height.latitude.data, start_lat)
    end_lon_idx = get_closest(wave_height.longitude.data, end_lon)
    end_lat_idx = get_closest(wave_height.latitude.data, end_lat)

    start = (start_lat_idx, start_lon_idx)
    end = (end_lat_idx, end_lon_idx)

    indices, weight = route_through_array(
        costs, start, end, fully_connected=True, geometric=True
    )
    indices = np.stack(indices, axis=-1)

    coordinates = lat_lon_to_coordinates(
        indices, wave_height.latitude.data, wave_height.longitude.data
    )

    geojson_output = create_geojson(coordinates)

    return jsonify(geojson_output)

if __name__ == "__main__":
    app.run(debug=True)