import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import worldData from "./world-geojson.json"; // Import GeoJSON for countries

const Globe = () => {
  const svgRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const width = 800;
    const height = 800;
    const radius = width / 2;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous svg content

    // Create projection
    const projection = d3
      .geoOrthographic()
      .scale(radius - 10)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Add the ocean (globe background)
    svg
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", radius - 10)
      .attr("fill", "#80b1d3");

    // Add country boundaries
    svg
      .append("g")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("fill", "#b8b8b8")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5);

    // Drag behavior for manual rotation
    const drag = d3.drag().on("drag", (event) => {
      const rotate = projection.rotate();
      projection.rotate([
        rotate[0] + event.dx * 0.5,
        rotate[1] - event.dy * 0.5,
      ]);
      svg.selectAll("path").attr("d", pathGenerator); // Update paths with new rotation
    });

    // Apply drag interaction
    svg.call(drag);

    // Optional: Static rotation (globe rotates automatically when not dragged)
    if (isRotating) {
      d3.timer((elapsed) => {
        const rotation = [elapsed * 0.02, -30]; // Adjust rotation speed
        projection.rotate(rotation);
        svg.selectAll("path").attr("d", pathGenerator); // Update paths with new rotation
      });
    }

    // Function to toggle rotation on/off
    const handleMouseDown = () => setIsRotating(false);
    const handleMouseUp = () => setIsRotating(true);
    svg.on("mousedown", handleMouseDown);
    svg.on("mouseup", handleMouseUp);
  }, [isRotating]);

  return (
    <div>
      <svg ref={svgRef} width="800" height="800"></svg>
    </div>
  );
};

export default Globe;
