import { useLocation } from "wouter"

export const getLocationPath = (pathString: string) => `location/${pathString}`

export const useNavigate = () => {
  const [, setLocation] = useLocation()
  const navigate = (path: string) => setLocation(`/location/${path}`)

  return navigate
}

export const getImagePath = (imageFileName: string) =>
  `${import.meta.env.BASE_URL}/${imageFileName}`
