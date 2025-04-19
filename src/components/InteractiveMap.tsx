import React, { useState } from "react"
import Map, { NavigationControl, Marker } from "react-map-gl/maplibre"
import maplibregl from "maplibre-gl"
import { useAtomValue } from "jotai"
import { locationsDataAtom } from "../atoms"
import MapPOIMarker from "./MapPOIMarker"

const InteractiveMap: React.FC = () => {
  const locations = useAtomValue(locationsDataAtom)
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 1.5,
  })

  const mapStyle =
    "https://api.maptiler.com/maps/b2f17cd3-732f-4fd4-bd08-86199b3174d1/style.json?key=yhnnu3oRHFRMS2RI6I75"

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapLib={maplibregl}
        mapStyle={mapStyle}
        style={{ width: "100%", height: "100%" }}
        doubleClickZoom={false}
      >
        <NavigationControl position="top-right" />

        {locations.map((location, index) => (
          <Marker
            key={index}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <MapPOIMarker location={location} />
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default InteractiveMap
