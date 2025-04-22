import { LocationData, RichText } from "../atoms"

const hypostyleCaption: RichText = [
  {
    text: "Hypostyle hall, Great Mosque of Córdoba, Spain.",
    italic: true,
  },
  { text: " Photo by wsifrancis, CC BY-NC-ND 2.0, via " },
  {
    text: "Smarthistory",
    link: "https://smarthistory.org/the-great-mosque-of-cordoba/",
  },
  { text: "." },
]

const cristoDeLaLuzCaption: RichText = [
  {
    text: "Former Mosque of Cristo de la Luz, Toledo, Spain.",
    italic: true,
  },
  { text: " Photo by Fernando, January 29, 2025. Wikimedia Commons, " },
  {
    text: "CC BY-SA 4.0",
  },
  { text: ", " },
  {
    text: "https://commons.wikimedia.org/w/index.php?curid=161540631",
    link: "https://commons.wikimedia.org/w/index.php?curid=161540631",
  },
  { text: "." },
]

export const cordoba: LocationData = {
  imageFileName: "cordoba.jpg",
  imageAttribution: hypostyleCaption,
  location: "Cordoba",
  name: "Great Mosque",
  path: "great_mosque",
  dateRange: "785 CE to Present",
  overview:
    "The Great Mosque of Cordoba is one of the most remarkable examples of Islamic architecture in medieval Spain. Constructed in 785 CE, it reflects the artistic and cultural achievements of the Umayyad Emirate of Cordoba.",
  descriptionParagraphs: [
    "The Great Mosque of Cordoba is a major Islamic architectural and cultural landmark. It exemplifies the beautiful architectural tradition of the Islamic world at the time, including religious symbols and motifs, as well as unique styles such as the hypostyle hall. The mosque was created both as a religious landmark and to legitimize the rule of the Umayyad Emirate of Cordoba, who had recently retaken power in the region. The mosque's design included a grand display of wealth and power with its huge horseshoe arches, ornately decorated mihrab, and use of valuable marble. Additionally, building in Cordoba, a thriving intellectual and commercial center at the time, provided the mosque with exposure and connections to other cultures around the world.",
    "The mosque's history is interconnected with both Islamic and Catholic history. During the 13th century, the mosque was conquered and converted into a Catholic cathedral. Even later, in the 15th and 16th centuries, it was modified again with Renaissance-style alterations that reshaped parts of its interior. Today, the mosque contains a blend of cultural elements from both the Islamic and Catholic architectural traditions.",
  ],
  lifeAtLocationSection: {
    caption: "Architectural Symbolism",
    paragraphs: [
      "One of the most striking features of the mosque is its vast hypostyle hall, where hundreds of evenly spaced identical columns create a feeling of endless repetition fading into the distance. This architectural choice conveys a feeling of infinity, mirroring the Islamic concept of Allah’s eternal nature. In Islam, Allah is believed to exist eternally and constantly beyond the bounds of time and space. Similarly, the columns help to create this feeling as their presence surrounds the viewer, spanning far and unchanging in all directions.",
      "Additionally, the mosque conveys God's presence through the use of light. In Islamic tradition, light often symbolizes the presence of God or God's guidance. The mosque reflects this by creating spaces where sunlight can reflect onto visitors from all angles, such as the Courtyard of the Orange Trees. This use of design and architecture to channel light onto visitors both enhances the mosque’s aesthetic beauty and conveys the presence of Allah in the space.",
    ],
  },
  globalSignificanceSection: {
    caption: "Global Significance of the Great Mosque",
    imageFileName: "mosque_of_light.jpg",
    richImageAttribution: cristoDeLaLuzCaption,
    paragraphs: [
      "The architectural motifs shown in the mosque are globally significant for their influence on other instances of Islamic architecture. With its location in Cordoba, a cultural and intellectual hub in the Islamic world, the mosque was integrated into an existing network in Spain and beyond. This meant that traveling artisans, craftspeople, and designers would pass through Cordoba and take influence from the mosque's unique designs. This manifested in similar design elements being used in other Spanish Islamic structures, likely due to the influence of this mosque. One example of this is the Mezquita del Cristo de la Luz, built around 1000 CE.",
      "This mosque features similar horseshoe arches, whose style and horizontal repetition are recognizable as the Cordoban style. From this and the well-established trade network in Cordoba, we can infer that the mosque's architectural design spread in the Islamic world, influencing the designs of other monuments, the Mosque of Cristo de la Luz among them. This widespread influence highlights how architectural styles from the Great Mosque traveled outwardly, contributing to a global exchange of artistic and cultural ideas in the Islamic world and beyond.",
    ],
  },
  latitude: 37.8789,
  longitude: -4.7794,
}
