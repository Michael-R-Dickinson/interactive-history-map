import React from "react"
import { RichText } from "../atoms"

interface RichTextProps {
  richText: RichText
}

const RichTextBlock: React.FC<RichTextProps> = ({ richText }) => {
  return (
    <div className="text-slate-700 text-sm">
      {richText.map((block, index) => {
        if (block.link) {
          return (
            <a
              key={index}
              href={block.link}
              style={{
                fontWeight: "normal",
                fontSize: "inherit",
                color: "inherit",
              }}
              className={`${block.italic ? "italic" : ""} appearance-none`}
            >
              {block.text}
            </a>
          )
        }
        return (
          <span key={index} className={block.italic ? "italic" : ""}>
            {block.text}
          </span>
        )
      })}
    </div>
  )
}

export default RichTextBlock
