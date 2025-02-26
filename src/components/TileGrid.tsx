import React from "react"
import { Box } from "@mui/material"
import Tile from "./Tile"
import { useAtomValue } from "jotai"
import { locationsDataAtom } from "../atoms"

const TileGrid: React.FC = () => {
  const locations = useAtomValue(locationsDataAtom)

  const handleTileClick = (title: string) => {
    console.log(`${title} clicked`)
  }

  return (
    <div className="sm:m-2 lg:mx-6 grid grid-cols-2">
      {locations.map((poi, index) => (
        <Box key={index} className="lg:p-4 md:p-2">
          <Tile
            image={poi.image}
            title={poi.title}
            location={poi.location}
            description={poi.description}
            onClick={() => handleTileClick(poi.title)}
          />
        </Box>
      ))}
    </div>
  )
}

export default TileGrid
