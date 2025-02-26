import React, { useState } from "react"
import Map, { NavigationControl, Marker } from "react-map-gl/maplibre"
import maplibregl from "maplibre-gl"

// Example waypoints array
// Replace with your own data and image URLs
const waypoints = [
  {
    latitude: 48.8566,
    longitude: 2.3522,
    image: "/images/paris.jpg",
    title: "Paris",
  },
  {
    latitude: 51.5074,
    longitude: -0.1278,
    image: "/images/london.jpg",
    title: "London",
  },
  {
    latitude: 40.7128,
    longitude: -74.006,
    image: "/images/newyork.jpg",
    title: "New York",
  },
]

const InteractiveMap: React.FC = () => {
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: 10,
    zoom: 1.5,
  })

  const mapStyle =
    "https://api.maptiler.com/maps/b2f17cd3-732f-4fd4-bd08-86199b3174d1/style.json?key=yhnnu3oRHFRMS2RI6I75"

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapLib={maplibregl}
        mapStyle={mapStyle}
        style={{ width: "100%", height: "100%" }}
        doubleClickZoom={false}
      >
        <NavigationControl position="top-left" />

        {/* Render each waypoint as a Marker with an image */}
        {waypoints.map((waypoint, index) => (
          <Marker
            key={index}
            latitude={waypoint.latitude}
            longitude={waypoint.longitude}
            anchor="bottom"
          >
            <img
              src={waypoint.image}
              alt={waypoint.title}
              style={{ width: 50, height: 50, cursor: "pointer" }}
              onClick={() => alert(`Clicked on: ${waypoint.title}`)}
            />
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default InteractiveMap
