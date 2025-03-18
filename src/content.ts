import { LocationData } from "./atoms"

const wagadou: LocationData = {
  imageFileName: "wagadou.jpg",
  location: "Western Africa",
  name: "Wagadou",
  path: "wagadou",
  dateRange: "200 to 1200 CE",
  overview:
    "The Kingdom of Wagadou was a powerful cosmopolitan center during the 11th century. Known for its extensive gold reserves, it conducted frequent trade with North Africa, exchanging goods, ideas and culture.",
  descriptionParagraphs: [
    "The Kingdom of Wagadou was a thriving economic and cultural center in the 11th century, recognized across the Islamic world for its vast gold reserves. Its location along major trade routes facilitated frequent exchanges with North Africa, importing goods such as salt and textiles in return for gold. Additionally, the kingdom's precise taxation system capitalized on this network, allowing for prosperous trade while enriching the central government. This wealth brought the kingdom into contact with merchants and scholars from Islamic North Africa and beyond. ",
    "The city stands out for its harmonious co-existence between people of many religions and beliefs. Practitioners of Islam and the region's traditional religion cooperated at all levels of government and commerce, creating a unique cultural blend in the kingdom.",
  ],
  lifeAtLocationSection: {
    caption: "Life in the Kingdom of Wagadou",
    paragraphs: [
      "Wagadou's religious inclusivity is reflected in the city's layout and design. Instead of blending religious spaces with government or workplace buildings as was common in other societies, Wagadou created separation between these functions to avoid favoring one religion over another. Religions could construct their own houses of worship and delegate these spaces for religious practice, maintaining a secular workplace or governmental environment. ",
      "Still, the government showed support for traditional religions, sponsoring the construction of designated spaces for shamans of the region's traditional beliefs. This environment that both supported traditional religions and included those of other belief systems likely allowed for the prosperous coexistence of many religions in the area. ",
    ],
  },
  globalSignificanceSection: {
    caption: "Connections to Trans-Saharan Trade",
    paragraphs: [
      "Wagadou was highly connected to a larger global network, not only through trade but also through cultural and religious exchange. Islam’s emergence in the area was likely the result of their extensive trade network across Africa, where religious beliefs moved alongside goods. These trade networks are highly global as they facilitated the spread of both merchandise and culture from various cities across Africa. ",
    ],
  },
  latitude: 14.45,
  longitude: -9.15,
}

const catahoyuk: LocationData = {
  imageFileName: "catahoyuk.jpg",
  location: "Turkey",
  name: "Çatalhöyük",
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
      "Çatalhöyük society also engaged in global trade networks. This is evident from the obsidian tools found inside the site. While there were no obsidian deposits found locally in the Çatalhöyük area, they acquired these specialized tools via trade with other nearby settlements",
      "This engagement and trade with other societies implies that the civilization did not exist in isolation, but instead participated in a network of exchange that allowed specialized tools to be imported from afar in an undeniably global transaction.",
    ],
    imageFileName: "obsidian_tools.jpg",
  },
  latitude: 37.6664,
  longitude: 32.8257,
}

const fire_temples: LocationData = {
  imageFileName: "fire_temple.jpg",
  location: "Achaemenid Empire",
  name: "Zoroastrian Fire Temples",
  path: "fire_temples",
  dateRange: "3rd to 7th century CE",
  overview:
    "Zoroastrian Fire Temples were cultural and religious hubs in the Achaemenid empire. Built to promote the religion, these temples helped Zoroastrianism reach a wide audience and spread its practice across the empire.",
  descriptionParagraphs: [
    "During the 5th century, Zoroastrianism was widespread across the Achaemenid empire with practitioners congregating in fire temples for worship and ceremonies. These temples served as the heart of Zoroastrian communities, where worshippers gathered to honor Ahura Mazda, the supreme deity of Zoroastrianism. Inside the temples priests maintained a sacred flame, stoking it regularly to ensure it stayed alight. The flame symbolized purity, helping to remind and encourage practitioners of the religion's values such as cleanliness and moral righteousness. ",
  ],
  lifeAtLocationSection: {
    caption: "Section Title Incoming",
    paragraphs: [
      "At the heart of Zoroastrian worship and teachings is the Yasna, one of the most important guiding texts of the religion. The Yasna is a piece of the larger set of Zoroastrian texts known as the Avesta. These began as a memorized oral tradition, but during the Achaemenid and Sasanian empires, they were collected into written records.",
      'The text emphasizes a strict moral code to be followed in daily life, placing extraordinary importance on righteous behavior in both thoughts and actions. The Yasna explicitly praises "good thoughts, good words, and good deeds," establishing these as fundamental principles for followers to uphold in their everyday lives. These principles imply that followers should be honest and candid in their communications with others, as expressed by "good words"; they should avoid deceptive or negative thoughts, as conveyed by "good thoughts"; and they should contribute to the general welfare of the world by conducting themselves morally, as expressed by "good deeds."',
    ],
  },
  globalSignificanceSection: {
    caption: "Section Title Incoming",
    paragraphs: [
      "Fire temples are global for the way they spread architectural styles across the Achaemenid empire. These temples used architecture to emphasize the religion's values, leading to a distinctive temple design. As Zoroastrianism spread, new fire temples were constructed by its followers, spreading the architectural style across the empire. The propagation of fire temple architecture represents a global development for its transfer of architectural ideas through the network of Zoroastrian followers. Inversely, each fire temple location served as a hub",
    ],
  },
  latitude: 33.6121,
  longitude: 52.5311,
}

const locationsInfo: LocationData[] = [
  wagadou,
  catahoyuk,
  fire_temples,
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

export default locationsInfo
