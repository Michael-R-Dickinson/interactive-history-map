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
    <div className="min-w-[100vw] h-[100vh] bg-white">
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
        </Switch>
      </Router>
    </div>
  )
}

export default App
