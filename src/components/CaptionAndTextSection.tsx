import React from "react"
import { CaptionDescription } from "../atoms"
import { Box, Typography } from "@mui/material"
import { getImagePath } from "../utils"
import GlobalHighlightedTypography from "./GlobalHighlightedTypography"
import RichTextBlock from "./RichText"

interface CaptionAndTextSectionProps {
  textSection: CaptionDescription
}

const CaptionAndTextSection: React.FC<CaptionAndTextSectionProps> = ({
  textSection,
}) => {
  const { caption, paragraphs, imageFileName, richImageAttribution } =
    textSection
  return (
    <div>
      <Box className="mt-4 mb-2">
        <Typography
          variant="h5"
          className=" font-semibold tracking-tight text-gray-800"
        >
          {caption}
        </Typography>
      </Box>
      <Box className="mb-6">
        {paragraphs.map((paragraph, index) => (
          <Typography
            className="mb-6 leading-relaxed text-gray-600"
            key={index}
          >
            <GlobalHighlightedTypography text={paragraph} />
          </Typography>
        ))}
      </Box>
      {imageFileName && (
        <Box className="w-2/3 min-w-[400px] max-w-[800px] mb-10">
          <img
            src={getImagePath(imageFileName)}
            className="object-contain rounded-md shadow-md max-h-[500px]"
          />
          {richImageAttribution && (
            <div className="text-slate-700 text-sm">
              <RichTextBlock richText={richImageAttribution} />
            </div>
          )}
        </Box>
      )}
    </div>
  )
}

export default CaptionAndTextSection
