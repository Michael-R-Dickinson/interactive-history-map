import React from "react"

import { Box } from "@mui/material"
import InteractiveMap from "../components/InteractiveMap"
import TileGrid from "../components/TileGrid"

const Map: React.FC = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <InteractiveMap />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRight: "1px solid #ddd",
        }}
      >
        <Box
          sx={{ paddingTop: "3.5rem", maxHeight: "100%", overflowY: "scroll" }}
        >
          <TileGrid />
        </Box>
      </Box>
    </Box>
  )
}

export default Map
