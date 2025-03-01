import React from "react"
import { AppBar, Toolbar, Typography, Box, styled, alpha } from "@mui/material"
import { useLocation } from "wouter"
import { useNavigate } from "../utils"

const NavMenu = styled(AppBar)({
  backgroundColor: alpha("#fff", 0.5),
})

const Navbar: React.FC = () => {
  const [location] = useLocation()
  const navigate = useNavigate()
  return (
    <NavMenu
      position="fixed"
      color="transparent"
      elevation={0}
      className="backdrop-blur-md"
    >
      <Toolbar
        className={`flex transition-all duration-500 ease-in-out items-center justify-between ${
          location != "/" ? "bg-slate-200" : ""
        } `}
      >
        <Box>
          <Typography variant="h5" className="font-serif text-gray-900">
            Capstone Project – World Architecture and Design
          </Typography>
          <Typography variant="subtitle2" className="text-gray-500">
            Michael Dickinson
          </Typography>
        </Box>
        <Box className="hover:text-gray-600 flex space-x-4 text-black">
          <p
            onClick={() => navigate("/")}
            color="inherit"
            className=" transition-colors"
          >
            Home
          </p>
        </Box>
      </Toolbar>
    </NavMenu>
  )
}

export default Navbar
