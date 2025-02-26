import React from "react"
import { LocationData } from "../atoms"
import { motion } from "framer-motion"

interface MapPOIMarkerProps {
  location: LocationData
}

const MapPOIMarker: React.FC<MapPOIMarkerProps> = ({ location }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.2 }}
    >
      <motion.img
        className="w-16 h-16 border-2 border-white rounded-full cursor-pointer shadow-[0_0_8px_rgba(255,255,255,0.25)] hover:shadow-[0_0_24px_rgba(255,255,255,1)] object-cover"
        onClick={() => alert(`Clicked on: ${location.name}`)}
        src={location.image}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.3 },
        }}
      />
      <motion.div
        className="absolute z-10 w-48 origin-top top-full mt-[0.5rem]"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
      >
        <p className="text-xl text-center text-black">{location.name}</p>
      </motion.div>
    </motion.div>
  )
}

export default MapPOIMarker
