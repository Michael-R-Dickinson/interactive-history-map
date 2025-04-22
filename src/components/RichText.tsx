import React from "react"
import { RichText } from "../atoms"

interface RichTextProps {
  richText: RichText
}

const RichTextBlock: React.FC<RichTextProps> = ({ richText }) => {
  return (
    <div>
      {richText.map((block, index) => {
        if (block?.break) {
          return <br key={index} />
        }

        if (block.link) {
          return (
            <span key={index}>
              <a
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
            </span>
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
