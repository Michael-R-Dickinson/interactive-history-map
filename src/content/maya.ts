import { LocationData, RichText } from "../atoms"

const headerPyramidAttribution: RichText = [
  {
    text: "Chichen Itza, the Pyramid of Kukulcan with chacmool figure, Yucatán, Mexico.",
    italic: true,
  },
  {
    text: " Photo by Werner Forman, Universal Images Group via Getty Images. History.com, ",
  },
  {
    text: "https://www.history.com/articles/maya",
    link: "https://www.history.com/articles/maya",
  },
  { text: "." },
]

export const maya: LocationData = {
  imageFileName: "maya_pyramids.jpeg",
  imageAttribution: headerPyramidAttribution,
  name: "Maya Civilization",
  path: "maya",
  dateRange: "2000 BC - approx. 17th c. CE",
  location: "Mesoamerica",
  overview:
    "The Maya civilization was one of the largest and longest-lasting civilizations in Mesoamerica, leading to many major developments such as a unique writing system and an accurate calendar system. Additionally, cultural developments such as the ball game Tlachtli demonstrate their unique and widespread culture.",
  descriptionParagraphs: [
    "During the 16th century, the Spanish colonized much of Mesoamerica, including many of the major Maya cities. This led to the documentation of the Maya ball game Tlachtli for European audiences. However, because most sources on the game come from Spanish explorers and chroniclers, our understanding of the original game is subject to many biases. Still, the writing of one Spanish writer, Antonio de Herrera, can give us insight into the Maya ball game. He explains that the game was played on a court with zones on opposite sides that each team would aim to hit a ball into. Tlachtli games would be a spectacle, and we can infer that they were taken very seriously as players were willing to stake extremely valuable items on their outcomes. ",
    "Additionally, a player’s performance in the game was likely seen as a representation of their overall character. For example, those who performed an extraordinary feat in Tlachtli, such as hitting the ball into a small hole, were thought to be extremely lucky people who might abuse their luck and succumb to adultery or theft. This shows that Tlachtli was not just for entertainment – it was important to the player's status or identity. The importance placed on the game demonstrates that Tlachtli was an influential element in Maya culture, one that was taken seriously and had implications for the players beyond the court.",
  ],
  lifeAtLocationSection: {
    caption: "Tlachtli Court Architecture",
    paragraphs: [
      "To emphasize the importance of Tlachtli, the courts were designed and maintained to a high standard. According to De Herrera, in any given city, the Tlachtli courts were constructed with sturdy materials and diligently maintained for the best playing conditions. Additionally, a city's Tlachtli courts were tied to its image and reputation, serving as a symbol of its power and prestige. Powerful cities could build large and immaculately maintained courts, using the game of Tlachtli to display and emphasize their wealth. These courts held symbolic significance in both their size and upkeep, likely serving as an important focal point in a city's architecture and design.",
    ],
    imageFileName: undefined,
  },
  globalSignificanceSection: {
    caption: "The Cultural Network Surrounding Tlachtli",
    paragraphs: [
      "The culture surrounding Tlachtli was likely shared across the Maya civilization, with cities across the empire playing the game and recognizing its importance. This common understanding shows that cities were in regular contact, existing in an interconnected network where ideas and culture were frequently exchanged. This network fits the definition of global by facilitating the exchange of values surrounding the importance and symbolism of court size.",
    ],
    imageFileName: undefined,
  },
  latitude: 15.7833,
  longitude: -89.15,
}
