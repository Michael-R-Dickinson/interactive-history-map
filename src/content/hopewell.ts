import { LocationData, RichText } from "../atoms"

const beaverPipeCaption: RichText = [
  {
    text: "Beaver effigy platform pipe, 100 BC–200 AD (pipestone, pearl, and bone), Havana Hopewell culture (200 BC–400 AD).",
    italic: true,
  },
  {
    text: " Thomas Gilcrease Museum, Tulsa, OK. Photo © Dirk Bakker / Bridgeman Art Library. In Alfred J. Andrea and James H. Overfield, ",
  },
  {
    text: "The Human Record: Sources of Global History",
    italic: true,
  },
  { text: ", 5th ed., 346–350. Boston: Houghton Mifflin, 2005." },
]

export const hopewell: LocationData = {
  imageFileName: "beaver_pipe.jpg",
  imageAttribution: beaverPipeCaption,
  name: "Hopewell Culture",
  path: "hopewell",
  dateRange: "approx. 100 BC to 500 CE",
  location: "Ohio River Valley",
  overview:
    "The Hopewell Culture refers to a group of related Indigenous peoples centralized around the Ohio River who participated in a vast network of trade. They leveraged this network to craft numerous artifacts, such as intricately carved animal effigy pipes.",
  descriptionParagraphs: [
    "The Hopewell Exchange network is a term used to refer to a trade system between Indigenous groups across North America for various goods such as obsidian, shells, and raw materials. It is important to note that these Indigenous groups did not refer to themselves as the Hopewell, but the term is used more generally when the specific society in the Hopewell Culture is not known. One such culture is notable for the production of a number of carved animal effigy pipes, including the Beaver Effigy Pipe (shown above).",
    "This pipe demonstrates the high value placed on their relationship with nature and the animals of the region. We can infer from the intricate details in the carving on the beaver's tail and face that the pipe's creator took great care in crafting it. These would have required specialist tools and meticulous work to carve, demonstrating the immense effort involved in creating it. This suggests that the item would have been important to its owner, perhaps for ceremonial or spiritual purposes. This idea is reinforced by the powerful depiction of a beaver presented on the pipe; when smoked, the beaver would appear to stare directly into the user's eyes. This intense visual supports the idea that the pipe carried some symbolic or religious importance. Additionally, the way the beaver appears to look into the user's eyes implies a sense of connection, demonstrating the close relationship between the people of this society and nature. Through this design, we can infer how these people saw themselves as connected to nature and the animals in the area, and the value they placed on that relationship.",
  ],
  lifeAtLocationSection: {
    caption: "Connection to Architectural Values",
    paragraphs: [
      "Just like the beaver pipe, the Hopewell people chose their building materials for durability, intending for their structures and creations to last for generations. For example, they built mounds using layers of clay and gravel, which reinforced these structures allowing them to survive even to this day. Similarly, the beaver pipe was crafted using durable stone, bone, and pearl, ensuring it could withstand the wear of both continued use and be preserved for many years in the ground. This focus on longevity in both their artifacts and buildings suggests a connection between this society's architectural values and those that shaped their construction of the beaver pipe. They relate through an overarching intention to create spaces and objects that last for centuries.",
    ],
    imageFileName: undefined,
  },
  globalSignificanceSection: {
    caption: "Integration with Global Trade Networks",
    paragraphs: [
      "The materials used to create the Beaver Effigy Pipe likely did not come from a single individual. Instead, sourcing items such as the bone, stone, and pearls in the pipe would have been much more accessible through trade. Many societies in the Hopewell Culture participated in a large network of exchange where numerous items were traded across much of eastern North America. This system likely contributed to sourcing the components in the beaver pipe. Even though the pipe's contribution to this network is small, it is global for its interaction with the larger system of trade, where many small exchanges across the network supported and formed the backbone of the global trade network.",
    ],
    imageFileName: undefined,
  },
  latitude: 39.4,
  longitude: -89.3985,
}
