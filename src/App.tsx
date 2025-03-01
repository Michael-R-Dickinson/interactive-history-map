import React from "react"
import Map from "./pages/Map"
import Location from "./pages/Location"
import { Route, Router, Switch } from "wouter"
import { useAtomValue } from "jotai"
import { locationsDataAtom } from "./atoms"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import { BASE_URL } from "./utils"
import LoadingScreen from "./components/LoadingScreen"

const App: React.FC = () => {
  const locations = useAtomValue(locationsDataAtom)
  // useEffect(() => {
  //   alert(
  //     "This is best viewed on a desktop with a reasonably sized monitor. It may not look great on a mobile device."
  //   )
  // }, [])
  return (
    <div className="w-[100vw] bg-white">
      <Box>
        <Navbar />
      </Box>
      <Router base={BASE_URL}>
        <Switch>
          <Route path="/">
            <LoadingScreen>
              <Map />
            </LoadingScreen>
          </Route>
          {locations.map((location) => (
            <Route path={`location/${location.path}`} key={location.path}>
              <Location locationData={location} />
            </Route>
          ))}
          <Route path="*">
            <div className="flex justify-center items-center h-[100vh] w-[100vw] text-amber-900">
              <h1>404 Not Found</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
