import React from "react"
import { LocationData } from "../atoms"
import { Box, Typography, Button } from "@mui/material"
import { getImagePath } from "../utils"

interface LocationProps {
  locationData: LocationData
}

const Location: React.FC<LocationProps> = ({ locationData }) => {
  const { name, descriptionParagraphs, imageFileName, location, dateRange } =
    locationData
  return (
    <div className="flex justify-center w-full">
      <Box
        component="section"
        className="
        flex
        min-h-[80vh]
        px-8
        py-12
        items-center
        justify-center
        md:min-w-[700px]
        w-2/3
      "
      >
        <Box className="min-w-full">
          <Box className="md:right-28 relative m-6">
            <Typography
              variant="h2"
              className="font-serif text-5xl font-bold text-red-700"
            >
              {name} - {location}
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-500">
              {dateRange}
            </Typography>
          </Box>

          <Box className="left-28 relative w-5/6 mb-8">
            <div>
              {descriptionParagraphs?.map((paragraph, index) => (
                <Typography
                  variant="body1"
                  className="text-lg text-gray-800"
                  sx={{ marginBottom: "0.25rem" }}
                  key={index}
                >
                  {paragraph}
                </Typography>
              ))}
            </div>
          </Box>

          <Box className="w-3/4 min-w-[700px] max-w-[800px] max-h-[500px]">
            <img
              src={getImagePath(imageFileName)}
              alt={name}
              className="w-full h-auto rounded-md shadow-md"
            />

            <Box className="mt-4 mb-2">
              <Typography
                variant="h5"
                className=" font-semibold tracking-tight text-gray-800"
              >
                Some Subtitle or Something
              </Typography>
            </Box>

            <Typography
              variant="body2"
              className="mb-6 leading-relaxed text-gray-700"
            >
              HELLO
            </Typography>

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
          </Box>
        </Box>

        {/* Potentially a caption if I want to source it */}
        {/* <Typography variant="subtitle2" className="mb-1 text-gray-600">
          </Typography> */}
      </Box>
    </div>
  )
}

export default Location
