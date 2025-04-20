import React from "react"

import { Popover } from "@mui/material"
import { useState } from "react"
import { globalDefinition } from "../content/content"

const GlobalDefinitionPopover: React.FC<{ word: string }> = ({ word }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget) // toggle
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <span onClick={handleClick} className="cursor-pointer">
        {word}
      </span>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <div className="p-4 max-w-[40rem] border-blue-200 border-2">
          {globalDefinition}
        </div>
      </Popover>
    </>
  )
}

interface GlobalHighlightedTypographyProps {
  text: string
}

const GlobalHighlightedTypography: React.FC<
  GlobalHighlightedTypographyProps
> = ({ text }) => {
  const splitText = text.split(/(\b\w*global\w*\b)/gi)
  return (
    <>
      {splitText.map((block, index) => {
        if (block.toLowerCase().includes("global")) {
          return (
            <span
              key={index}
              className="px-1.5 py-0.5 text-blue-500 bg-blue-100 rounded-md"
            >
              <GlobalDefinitionPopover word={block} />
            </span>
          )
        }

        return <span key={index}>{block}</span>
      })}
    </>
  )
}

export default GlobalHighlightedTypography
