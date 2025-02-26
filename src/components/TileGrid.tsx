import React from "react"
import { Box } from "@mui/material"
import Tile from "./Tile"

type TileData = {
  image: string
  title: string
  location: string
  description: string
}

const tileData: TileData[] = [
  {
    image: "/wagadou.jpg",
    location: "Mali",
    title: "Wagadou",
    description: "Description for Tile 3",
  },
  {
    image: "/catahoyuk.jpg",
    location: "Turkey",
    title: "Catahouyuk",
    description: "Description for Tile 1",
  },
  {
    image: "/fire_temple.jpg",
    location: "Iran",
    title: "Zoroastrian Fire Temples",
    description: "Description for Tile 2",
  },
  {
    image: "/cordoba.jpg",
    location: "Cordoba",
    title: "Great Mosque",
    description: "Description for Tile 2",
  },
]

const TileGrid: React.FC = () => {
  const handleTileClick = (title: string) => {
    console.log(`${title} clicked`)
  }

  return (
    <div className="sm:m-2 lg:mx-6 grid grid-cols-2">
      {tileData.map((tile, index) => (
        <Box key={index} className="lg:p-4 md:p-2">
          <Tile
            image={tile.image}
            title={tile.title}
            location={tile.location}
            description={tile.description}
            onClick={() => handleTileClick(tile.title)}
          />
        </Box>
      ))}
    </div>
  )
}

export default TileGrid
