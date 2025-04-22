import { LocationData, RichText } from "../atoms"

const headerImageAttribution: RichText = [
  {
    text: "Artist’s impression of Çatalhöyük.",
    italic: true,
  },
  { text: " Image credit: Dan Lewandowski, via " },
  {
    text: "Archaeologs",
    link: "https://www.archaeologs.com/i/111/catalhuyuk",
  },
  { text: "." },
]

const obsidianToolsRichAttribution: RichText = [
  {
    text: "Two points, a splintered piece and a carving tool from IST Area.",
    italic: true,
  },
  { text: " " },
  {
    text: "Tristan Carter, Nurcan Kayacan, and Marina Milić, “Chipped Stone,” in ",
  },
  {
    text: "Çatalhöyük 2005 Archive Report",
    italic: true,
  },
  { text: ", " },
  {
    text: "https://www.catalhoyuk.com/archive_reports/2005/ar05_31.html",
    link: "https://www.catalhoyuk.com/archive_reports/2005/ar05_31.html",
  },
  { text: "." },
]

export const catahoyuk: LocationData = {
  imageFileName: "catahoyuk.jpg",
  imageAttribution: headerImageAttribution,
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
    richImageAttribution: obsidianToolsRichAttribution,
  },
  latitude: 37.6664,
  longitude: 32.8257,
}
