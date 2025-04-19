import { atom } from "jotai"
import locationsInfo from "./content/content"

export type CaptionDescription = {
  caption: string
  paragraphs: string[]
  imageFileName?: string
  imageAttribution?: string
}

export type LocationData = {
  imageFileName: string
  imageAttribution?: string
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

export const locationsDataAtom = atom(locationsInfo)
