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

bbox = ((30, 0), (110, 45))
time_slice = 0

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
    startLat = data.get("startLat")
    endLat = data.get("endLat")
    startLon = data.get("startLon")
    endLon = data.get("endLon")

    start_lon = get_closest(wave_height.longitude.data, startLon)
    start_lat = get_closest(wave_height.latitude.data, startLat)
    end_lon = get_closest(wave_height.longitude.data, endLon)
    end_lat = get_closest(wave_height.latitude.data, endLat)

    start = (start_lat, start_lon)
    end = (end_lat, end_lon)

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
