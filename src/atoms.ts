import { atom } from "jotai"

type LocationData = {
  image: string
  title: string
  location: string
  description: string
  latitude: number
  longitude: number
}

const defaultLocations: LocationData[] = [
  {
    image: "/wagadou.jpg",
    location: "Mali",
    title: "Wagadou",
    description: "Description for Tile 3",
    latitude: 17.570692,
    longitude: -3.996166,
  },
  {
    image: "/catahoyuk.jpg",
    location: "Turkey",
    title: "Catahouyuk",
    description: "Description for Tile 1",
    latitude: 37.6173,
    longitude: 32.8252,
  },
  {
    image: "/fire_temple.jpg",
    location: "Iran",
    title: "Zoroastrian Fire Temples",
    description: "Description for Tile 2",
    latitude: 29.6121,
    longitude: 52.5311,
  },
  {
    image: "/cordoba.jpg",
    location: "Cordoba",
    title: "Great Mosque",
    description: "Description for Tile 2",
    latitude: 37.8882,
    longitude: -4.7794,
  },
]

export const locationsDataAtom = atom(defaultLocations)
