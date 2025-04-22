import { Box } from "@mui/material"
import React from "react"
import { getImagePath } from "../utils"
import { RichText } from "../atoms"
import RichTextBlock from "./RichText"

interface LocationImageProps {
  imageFileName: string
  imageAttribution?: RichText
  alt: string
}

const LocationImage: React.FC<LocationImageProps> = ({
  imageFileName,
  imageAttribution,
  alt,
}) => {
  return (
    <Box className="min-w-[700px] max-w-[800px] w-3/4 pb-5">
      <img
        src={getImagePath(imageFileName)}
        alt={alt}
        className="w-full h-auto rounded-md shadow-md max-h-[500px]"
      />
      <div className="my-1 text-sm text-gray-600">
        {imageAttribution && <RichTextBlock richText={imageAttribution} />}
      </div>
    </Box>
  )
}

export default LocationImage
