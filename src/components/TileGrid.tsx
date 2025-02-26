import React from "react"
import { Box } from "@mui/material"
import Tile from "./Tile"
import { useAtomValue } from "jotai"
import { locationsDataAtom } from "../atoms"

const TileGrid: React.FC = () => {
  const locations = useAtomValue(locationsDataAtom)

  return (
    <div className="sm:m-2 lg:mx-6 grid grid-cols-2">
      {locations.map((poi, index) => (
        <Box key={index} className="lg:p-4 md:p-2">
          <Tile location={poi} key={index} />
        </Box>
      ))}
    </div>
  )
}

export default TileGrid
