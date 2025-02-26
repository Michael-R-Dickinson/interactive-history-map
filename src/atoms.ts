import { atom } from "jotai"

export type LocationData = {
  image: string
  name: string
  path: string
  location: string
  description: string
  latitude: number
  longitude: number
}

const defaultLocations: LocationData[] = [
  {
    image: "/wagadou.jpg",
    location: "Mali",
    name: "Wagadou",
    path: "wagadou",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    latitude: 17.570692,
    longitude: -3.996166,
  },
  {
    image: "/catahoyuk.jpg",
    location: "Turkey",
    name: "Catahouyuk",
    path: "catahoyuk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    latitude: 37.6173,
    longitude: 32.8252,
  },
  {
    image: "/fire_temple.jpg",
    location: "Iran",
    name: "Zoroastrian Fire Temples",
    path: "fire_temples",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    latitude: 29.6121,
    longitude: 52.5311,
  },
  {
    image: "/cordoba.jpg",
    location: "Cordoba",
    name: "Great Mosque",
    path: "great_mosque",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    latitude: 37.8882,
    longitude: -4.7794,
  },
]

export const locationsDataAtom = atom(defaultLocations)
