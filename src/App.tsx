import React from "react"
import { Box } from "@mui/material"
import InteractiveMap from "./components/InteractiveMap"
import Navbar from "./components/Navbar"
import TileGrid from "./components/TileGrid"

const App: React.FC = () => {
  // useEffect(() => {
  //   alert(
  //     "This is best viewed on a desktop with a reasonably sized monitor. It may not look great on a mobile device."
  //   )
  // }, [])
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
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
          <Box sx={{ marginTop: "3.5rem" }}>
            <TileGrid />
          </Box>
        </Box>
      </Box>
      <Box>Hello</Box>
    </Box>
  )
}

export default App
