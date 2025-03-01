import React from "react"
import { LocationData } from "../atoms"
import { Box, Typography } from "@mui/material"
import CaptionAndTextSection from "../components/CaptionAndTextSection"
import LocationImage from "../components/LocationImage"

interface LocationProps {
  locationData: LocationData
}

const Location: React.FC<LocationProps> = ({ locationData }) => {
  const {
    name,
    descriptionParagraphs,
    imageFileName,
    location,
    dateRange,
    globalSignificanceSection,
    lifeAtLocationSection,
  } = locationData
  return (
    <div className="h-fit flex justify-center w-full bg-white">
      <Box
        component="section"
        className="
        flex
        px-8
        py-12
        items-center
        justify-center
        md:min-w-[700px]
        bg-white
        w-3/5"
      >
        <Box className="h-full min-w-full">
          <Box className="md:right-28 relative mt-8 mb-4">
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

          <LocationImage imageFileName={imageFileName} alt={name} />

          <CaptionAndTextSection textSection={lifeAtLocationSection} />
          <CaptionAndTextSection textSection={globalSignificanceSection} />
        </Box>
      </Box>
    </div>
  )
}

export default Location
