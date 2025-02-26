import { atom } from "jotai"

type LocationData = {
  image: string
  title: string
  location: string
  description: string
}

const defaultLocations: LocationData[] = [
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

export const locationsDataAtom = atom(defaultLocations)
