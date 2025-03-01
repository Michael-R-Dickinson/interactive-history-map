import React from "react"
import { CaptionDescription } from "../atoms"
import { Box, Typography } from "@mui/material"

interface CaptionAndTextSectionProps {
  textSection: CaptionDescription
}

const CaptionAndTextSection: React.FC<CaptionAndTextSectionProps> = ({
  textSection,
}) => {
  const { caption, paragraphs } = textSection
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
            {paragraph}
          </Typography>
        ))}
      </Box>
    </div>
  )
}

export default CaptionAndTextSection
