import { atom } from "jotai"

export type CaptionDescription = {
  caption: string
  paragraphs: string[]
  imageFileName?: string
}

export type LocationData = {
  imageFileName: string
  name: string
  path: string
  dateRange: string
  location: string
  overview: string
  descriptionParagraphs: string[]
  lifeAtLocationSection: CaptionDescription
  globalSignificanceSection: CaptionDescription
  latitude: number
  longitude: number
}

const defaultLocations: LocationData[] = [
  {
    imageFileName: "wagadou.jpg",
    location: "Mali",
    name: "Wagadou",
    path: "wagadou",
    dateRange: "300-1200 AD (placeholder)",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    lifeAtLocationSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    globalSignificanceSection: {
      caption: "Section Title 2 Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    latitude: 17.570692,
    longitude: -3.996166,
  },
  {
    imageFileName: "catahoyuk.jpg",
    location: "Turkey",
    name: "Catahouyuk",
    path: "catahoyuk",
    dateRange: "7100 to 5700 BCE",
    overview:
      "Çatalhöyük is one of the world’s oldest known cities, and offers a window into early human society, where people lived in roof-connected homes, created wall art, and practiced early agriculture over 9,000 years ago.",
    descriptionParagraphs: [
      "Çatalhöyük is an ancient archaeological site located near modern-day Konya in Turkey . It existed from approximately 7100 BCE to 5700 BCE, and, at its height housed between 3000 and 8000 people. The site is notable for being one of the largest and best-preserved Neolithic settlements. It stands out for its unique layout with no streets and densely packed houses that could be accessed via a ladder through the ceiling. ",
      "The people who once lived there domesticated animals, practiced agriculture, and traded frequently with other civilizations. From the site, we can gain insight into the way people in ancient civilizations lived and the societal structures that existed at the time.",
    ],
    lifeAtLocationSection: {
      caption: "Life at Çatalhöyük",
      paragraphs: [
        "Çatalhöyük’s layout with dense clumpings of mudbrick homes suggests a highly communal way of life. The settlement features consistently sized houses across all people of the settlement, no walls or gated districts as well as a notable lack of grand structures. People would have been free to move throughout the communal space uninhibited, living within similar means to their peers.",
        "This suggests that most people in the settlement were of a similar social status, without lots of distinctions between social classes that would lead to the development of gated districts or large houses/palaces. Instead, the uniformity of homes and the lack of exclusive spaces are indicative of an egalitarian and communal society where access to resources and spaces were shared by the inhabitants.",
      ],
    },
    globalSignificanceSection: {
      caption: "Global Connections at Çatalhöyük",
      paragraphs: [
        "Çatalhöyük society also engaged in global trade networks. This is edvident from the obsidian tools found inside the site. While there were no obsidian deposits found locally in the Çatalhöyük area, they acquired these specialized tools via trade with other nearby settlements",
        "This engagement and trade with other societies implies that the civilization did not exist in isolation, but instead participated in a network of exchange that allowed specialized tools to be imported from afar in an undeniably global transactiopn.",
      ],
      imageFileName: "obsidian_tools.jpg",
    },
    latitude: 37.6173,
    longitude: 32.8252,
  },
  {
    imageFileName: "fire_temple.jpg",
    location: "Iran",
    name: "Zoroastrian Fire Temples",
    path: "fire_temples",
    dateRange: "300-1200 AD (placeholder)",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    lifeAtLocationSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    globalSignificanceSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    latitude: 29.6121,
    longitude: 52.5311,
  },
  {
    imageFileName: "cordoba.jpg",
    location: "Cordoba",
    name: "Great Mosque",
    path: "great_mosque",
    dateRange: "300-1200 AD (placeholder)",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    lifeAtLocationSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    globalSignificanceSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    latitude: 37.8882,
    longitude: -4.7794,
  },
  {
    imageFileName: "taghaza.jpg",
    location: "Western Sahara",
    name: "Kingdom of Mali",
    path: "taghaza",
    dateRange: "300-1200 AD (placeholder)",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    lifeAtLocationSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    globalSignificanceSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    latitude: 20.7856,
    longitude: -13.0518,
  },
  {
    imageFileName: "baghdad.jpeg",
    location: "Iraq",
    name: "Baghdad",
    path: "baghdad",
    dateRange: "300-1200 AD (placeholder)",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    lifeAtLocationSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    globalSignificanceSection: {
      caption: "Section Title Incoming",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    latitude: 33.3152,
    longitude: 44.3661,
  },
]

export const locationsDataAtom = atom(defaultLocations)
