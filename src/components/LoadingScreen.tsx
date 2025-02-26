import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  children: React.ReactNode
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 333) // 0.5 seconds load time
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.2,
                duration: 1,
              },
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          >
            <h3 className="text-slate-400 mb-4 text-3xl">Loading...</h3>
            <div className="w-3/4 h-2 max-w-md overflow-hidden bg-gray-200 rounded-full">
              <motion.div
                className="bg-slate-300 h-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}

export default LoadingScreen
