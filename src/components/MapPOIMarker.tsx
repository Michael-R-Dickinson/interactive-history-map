import React from "react"
import { LocationData } from "../atoms"
import { motion } from "framer-motion"

interface MapPOIMarkerProps {
  location: LocationData
}

const MapPOIMarker: React.FC<MapPOIMarkerProps> = ({ location }) => {
  return (
    <motion.img
      className="w-16 h-16 border-2 border-white rounded-full cursor-pointer"
      onClick={() => alert(`Clicked on: ${location.title}`)}
      src={location.image}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.2 }}
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.3 },
      }}
    />
  )
}

export default MapPOIMarker
