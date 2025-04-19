import { Box, Typography } from "@mui/material"
import React from "react"
import { getImagePath } from "../utils"

interface LocationImageProps {
  imageFileName: string
  imageAttribution?: string
  alt: string
}

const LocationImage: React.FC<LocationImageProps> = ({
  imageFileName,
  imageAttribution,
  alt,
}) => {
  return (
    <Box className="w-3/4 min-w-[700px] max-w-[800px] max-h-[500px] mb-10">
      <img
        src={getImagePath(imageFileName)}
        alt={alt}
        className="w-full h-auto rounded-md shadow-md"
      />

      <Typography variant="subtitle2" className="mb-1 text-gray-600">
        {imageAttribution}
      </Typography>
    </Box>
  )
}

export default LocationImage
