import { useLocation } from "wouter"

export const getLocationPath = (pathString: string) => `location/${pathString}`

export const useNavigate = () => {
  const [, setLocation] = useLocation()
  const navigate = (path: string) => setLocation(`/location/${path}`)

  return navigate
}

export const getImagePath = (imageFileName: string) =>
  `${BASE_URL}/${imageFileName}`

export const BASE_URL = import.meta.env.BASE_URL.slice(0, -1)
