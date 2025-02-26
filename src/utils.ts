import { LocationData } from "./atoms"

export const navigateToLocationPage = (location: LocationData) => {
  window.location.href = `/location/${location.name}`
}
