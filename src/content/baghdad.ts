import { LocationData, RichText } from "../atoms"

const baghdadRoundCityCaption: RichText = [
  {
    text: "The round city of Baghdad in the 10th century, peak of the Abbasid Caliphate.",
    italic: true,
  },
  { text: " Illustration by Jean Soutif, Science Photo Library. " },
  {
    text: "The Guardian",
    italic: true,
  },
  { text: ", March 16, 2016. " },
  {
    text: "https://www.theguardian.com/cities/2016/mar/16/story-cities-day-3-baghdad-iraq-world-civilisation",
    link: "https://www.theguardian.com/cities/2016/mar/16/story-cities-day-3-baghdad-iraq-world-civilisation",
  },
  { text: "." },
]

const alZahrawiHospitalCaption: RichText = [
  {
    text: "Al-Zahrawi (Abulcasis) attending to a patient in a hospital in Córdoba, Al-Andalus.",
    italic: true,
  },
  { text: " Illustration by Sheila Terry, Science Photo Library. " },
  {
    text: "AramcoWorld",
    italic: true,
  },
  { text: ", March 1, 2017. " },
  {
    text: "https://www.aramcoworld.com/articles/2017/the-islamic-roots-of-the-modern-hospital",
    link: "https://www.aramcoworld.com/articles/2017/the-islamic-roots-of-the-modern-hospital",
  },
  { text: "." },
  {
    text: "",
    break: true,
  },
  {
    text: "Note: this image does not necessarily depict the exact hospital constructed by Caliph Al-Mustanjid, but it is of a similar hospital located in Baghdad.",
    italic: true,
  },
]

export const baghdad: LocationData = {
  imageFileName: "baghdad_round.jpg",
  imageAttribution: baghdadRoundCityCaption,
  location: "Iraq",
  name: "Baghdad",
  path: "baghdad",
  dateRange: "750-1258 CE (Abbasid Caliphate)",
  overview:
    "Baghdad was a remarkable city under the Abbasid Caliphate with many unique developments such as a form of healthcare for all citizens and psychiatric facilities for those with mental illness.",
  descriptionParagraphs: [
    "The city of Baghdad was a thriving metropolis in the 12th century, functioning as a center for trade along the Silk Road and a testament to the power and advancement of the Abbasid Caliphate. The city contained many outstanding developments, implemented by the Caliph Al-Mustanjid such as a healthcare system for all inhabitants and an asylum for those deemed mentally unwell. This medical treatment was sponsored by the Caliph and available for free to people of any social class or status. These developments were supposedly created with the goal of improving the general welfare of the city. The Spanish explorer Benjamin of Tudela who was traveling through the city emphasizes this, noting the Caliph's charity in creating these facilities. It is apparent that the Caliph and the city as a whole were dedicated to the general welfare of the city's population, focusing on creating a society that supported members of any status or social class. ",
  ],
  lifeAtLocationSection: {
    caption: "City Planning and Architecture",
    paragraphs: [
      "This priority for public welfare was reflected in the city's architecture and city planning as well. The city placed the medical houses and hospital facilities on the banks of the Euphrates river, enabling them to have easy access to water and transportation. Because of these advantages, locations along this important river would have been valuable real-estate, so the Caliph's decision to place the hospital in such a central area demonstrates his commitment to providing widespread medical care. Had the Caliph prioritized commerce or monumental architecture over this medical system, he might have chosen to fill the space with markets or a royal palace, leaving the hospital to a less important or accessible location. Instead, he optimized the city's layout so the hospital could accommodate as many people as possible and provided it with the access to the key resources needed to treat them.",
    ],

    imageFileName: "baghdad_hospital.jpg",
    richImageAttribution: alZahrawiHospitalCaption,
  },
  globalSignificanceSection: {
    caption: "Baghdad as a Trade Hub on the Silk Road",
    paragraphs: [
      "Baghdad at the time was global for its connections to other cities and societies along the Silk Road. As a trade center, it handled the import and export of large quantities of goods, transported often from distances as far as India. As a result, the city accommodated many traveling merchants who spread knowledge and stories from these distant civilizations. This undeniably contributed to the spread of information and culture between civilizations along the Silk Road, with Baghdad serving as a hub for these exchanges. Baghdad fits the definition of global for its contribution to the transfer of goods, ideas and culture across the vast Silk Road network. ",
    ],
  },
  latitude: 33.3152,
  longitude: 44.3661,
}
