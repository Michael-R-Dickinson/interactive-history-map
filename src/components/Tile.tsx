import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { alpha, styled } from "@mui/material"
import { useLocation } from "wouter"
import { LocationData } from "../atoms"

const TileMotionContainer = styled(motion.div)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  maxHeight: "250px",
  minHeight: "200px",
  height: "100%",
})

const TextPanelContainer = styled(motion.div)({
  backgroundColor: alpha("#fff", 0.6),
})

interface TileProps {
  location: LocationData
}

const Tile: React.FC<TileProps> = ({ location: locationData }) => {
  const { name: title, description, image, location, path } = locationData
  const [, setLocation] = useLocation()
  const titleTextRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [titleTextUnhoveredOffset, setTitleTextUnhoveredOffset] = useState<
    number | null
  >(null)

  const calculateTitleTextOffset = () => {
    const containerHeight = containerRef.current?.clientHeight
    const titleTextHeight = titleTextRef.current?.clientHeight
    setTitleTextUnhoveredOffset(containerHeight! - titleTextHeight!)
  }
  useEffect(() => {
    window.addEventListener("resize", calculateTitleTextOffset, false)
    calculateTitleTextOffset()
  })

  const onClick = () => {
    setLocation("/" + path)
  }

  return (
    <TileMotionContainer
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <img src={image} alt={title} className="object-cover w-full h-full" />

      <TextPanelContainer
        color="transparent"
        className="backdrop-blur-xs absolute bottom-0 left-0 right-0 h-full"
        variants={{
          rest: {
            y: titleTextUnhoveredOffset
              ? titleTextUnhoveredOffset + "px"
              : "70%",
          },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.2 }}
        ref={containerRef}
      >
        <div className="px-4">
          <div className="py-2" ref={titleTextRef}>
            <h3 className="text-xl text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </TextPanelContainer>
    </TileMotionContainer>
  )
}

export default Tile
