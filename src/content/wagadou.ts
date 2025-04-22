import { LocationData, RichText } from "../atoms"

const headerImageAttribution: RichText = [
  {
    text: "View of the old city of Chinguetti, Mauritania.",
    italic: true,
  },
  { text: " Photo by François COLIN, August 2004. Wikimedia Commons, " },
  {
    text: "CC BY-SA 2.5",
  },
  { text: ", " },
  {
    text: "https://commons.wikimedia.org/wiki/File:Chinguetti-Vue_Goblale_Vieille_ville.jpg",
    link: "https://commons.wikimedia.org/wiki/File:Chinguetti-Vue_Goblale_Vieille_ville.jpg",
  },
  { text: "." },
]

export const wagadou: LocationData = {
  imageFileName: "wagadou.jpg",
  imageAttribution: headerImageAttribution,
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
