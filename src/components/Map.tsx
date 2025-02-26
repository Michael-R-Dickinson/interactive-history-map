import React from "react"
import { Box } from "@mui/material"

const Map: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/map.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />
  )
}

export default Map
