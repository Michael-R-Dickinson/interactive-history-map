import { LocationData, RichText } from "../atoms"

const bakuFireTempleCaption: RichText = [
  {
    text: "Ateshgah Fire Temple, Baku, Azerbaijan.",
    italic: true,
  },
  {
    text: " Photo by Jesper Ahlin Marceta, October 13, 2019. Wikimedia Commons, ",
  },
  {
    text: "CC BY-SA 4.0",
  },
  { text: ", " },
  {
    text: "https://commons.wikimedia.org/wiki/File:Jahlinmarceta_baku_temple.jpg",
    link: "https://commons.wikimedia.org/wiki/File:Jahlinmarceta_baku_temple.jpg",
  },
  { text: "." },
]

export const fire_temples: LocationData = {
  imageFileName: "fire_temple.jpg",
  imageAttribution: bakuFireTempleCaption,
  location: "Achaemenid Empire",
  name: "Zoroastrian Fire Temples",
  path: "fire_temples",
  dateRange: "3rd to 7th century CE",
  overview:
    "Zoroastrian Fire Temples were cultural and religious hubs in the Achaemenid empire. Built to promote the Zoroastrian belief system, these temples helped Zoroastrianism reach a wide audience and spread its practice across the empire.",
  descriptionParagraphs: [
    "During the 5th century, Zoroastrianism was widespread across the Achaemenid empire with practitioners congregating in fire temples for worship and ceremonies. These temples served as the heart of Zoroastrian communities, where worshippers gathered to honor Ahura Mazda, the supreme deity of Zoroastrianism. Inside the temples, priests maintained a sacred flame, stoking it regularly to ensure it stayed alight. The flame symbolized purity, helping to remind and encourage practitioners of the religion's values such as cleanliness and moral righteousness. ",
  ],
  lifeAtLocationSection: {
    caption: "Zoroastrian Worship at Fire Temples",
    paragraphs: [
      "At the heart of Zoroastrian worship and teachings is the Yasna, one of the most important guiding texts of the religion. The Yasna is a piece of the larger set of Zoroastrian texts known as the Avesta. These began as a memorized oral tradition, but during the Achaemenid and Sasanian empires, they were collected into written records.",
      'The text emphasizes a strict moral code to be followed in daily life, placing extraordinary importance on righteous behavior in both thoughts and actions. The Yasna explicitly praises "good thoughts, good words, and good deeds," establishing these as fundamental principles for followers to uphold in their everyday lives. These principles imply that followers should be honest and candid in their communications with others, as expressed by "good words"; they should avoid deceptive or negative thoughts, as conveyed by "good thoughts"; and they should contribute to the general welfare of the world by conducting themselves morally, as expressed by "good deeds."',
    ],
  },
  globalSignificanceSection: {
    caption: "Global Spread of Fire Temples",
    paragraphs: [
      "Fire temples are global for the way they spread architectural styles across the Achaemenid empire. These temples used architecture to emphasize the religion's values, leading to a distinctive temple design. As Zoroastrianism spread, new fire temples were constructed by its followers, spreading the architectural style across the empire. The propagation of fire temple architecture represents a global development for its transfer of architectural ideas through the network of Zoroastrian followers. Inversely, each fire temple location served as a hub for Zoroastrian followers in the area, allowing them to share and strengthen the religion in the community. ",
    ],
  },
  latitude: 33.6121,
  longitude: 52.5311,
}
