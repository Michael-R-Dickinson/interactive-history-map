import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  styled,
  alpha,
} from "@mui/material"

const NavMenu = styled(AppBar)({
  backgroundColor: alpha("#fff", 0.5),
})

const Navbar: React.FC = () => {
  return (
    <NavMenu
      position="fixed"
      color="transparent"
      elevation={0}
      className="backdrop-blur-md"
    >
      <Toolbar className="flex items-center justify-between">
        {/* Title and subtitle */}
        <Box>
          <Typography variant="h5" className="font-serif text-gray-900">
            Capstone Project – World Architecture and Design
          </Typography>
          <Typography variant="subtitle2" className="text-gray-500">
            Michael Dickinson
          </Typography>
        </Box>
        {/* Navigation Links */}
        <Box className="hover:text-gray-600 flex space-x-4 text-black">
          <Link
            href="#"
            underline="none"
            color="inherit"
            className=" transition-colors"
            sx={{
              "&:hover": {
                color: "inherit",
              },
            }}
          >
            Home
          </Link>
        </Box>
      </Toolbar>
    </NavMenu>
  )
}

export default Navbar
