import { Box, Button } from "@mui/material"
import React from "react"

const ActionButtons: React.FC = () => {
  return (
    <>
      <Box className="mt-4">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d0021b",
            "&:hover": { backgroundColor: "#b60116" },
            textTransform: "none",
            borderRadius: "9999px",
            marginRight: "1rem",
          }}
        >
          View Sources
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#d0021b",
            borderColor: "#d0021b",
            textTransform: "none",
            borderRadius: "9999px",
            "&:hover": {
              backgroundColor: "#ffe5e7",
              borderColor: "#b60116",
              color: "#b60116",
            },
          }}
        >
          Something else
        </Button>
      </Box>
    </>
  )
}

export default ActionButtons
