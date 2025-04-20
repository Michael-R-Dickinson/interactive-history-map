import { LocationData } from "../atoms"
import { baghdad } from "./baghdad"
import { catahoyuk } from "./catahouk"
import { cordoba } from "./cordoba"
import { fire_temples } from "./fire_temples"
import { hopewell } from "./hopewell"
import { maya } from "./maya"
import { taghaza } from "./taghaza"
import { wagadou } from "./wagadou"

export const globalDefinition = [
  `In this project, "global" is not used as a geographic scope in the sense of "worldwide". Rather, it is intended to describe connections, exchanges, and networks between societies. The idea is to emphasize that societies didn't exist in isolation and their history was not confined to the borders of their region or territory but could have effects across the globe or even ripple effects in neighboring territories. By focusing on these interactions, we can gain a better understanding of the underlying systems or trends driving historical developments. For example, rather than focusing on specifically on traditional regional histories such as "European History" or "Chinese History", global history might focus on the way a specific development spread across the globe or throughout a related network of cities. So in this project, when I define something as global, it relates to how the development interacts with a system or network that connected people on any geographic scale.`,
]

const locationsInfo: LocationData[] = [
  wagadou,
  catahoyuk,
  fire_temples,
  cordoba,
  taghaza,
  baghdad,
  maya,
  hopewell,
]

export default locationsInfo
