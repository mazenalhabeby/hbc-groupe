"use client"

import {motion, AnimatePresence} from "framer-motion"
import {useEffect, useState} from "react"
import {cn} from "@/lib/utils"

type Props = {
  images: string[]
  children?: React.ReactNode
  overlay?: boolean
  overlayClassName?: string
  className?: string
  autoplay?: boolean
  direction?: "up" | "down"
}

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const preloadImages = async () => {
      const loaded = await Promise.all(
        images.map(
          (src) =>
            new Promise<string>((resolve) => {
              const img = new Image()
              img.src = src
              img.onload = () => resolve(src)
            })
        )
      )
      setLoadedImages(loaded)
    }

    preloadImages()
  }, [images])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrevious()
    }

    window.addEventListener("keydown", handleKeyDown)

    const interval = autoplay ? setInterval(handleNext, 7000) : undefined

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (interval) clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, images.length])

  const areImagesLoaded = loadedImages.length > 0

  return (
    <section
      className={cn(
        "relative w-full h-screen bg-black overflow-hidden flex items-center justify-center",
        className
      )}
      style={{perspective: "1000px"}}
    >
      {/* Optional overlay */}
      {areImagesLoaded && overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black/70 z-40 pointer-events-none",
            overlayClassName
          )}
        />
      )}

      {/* Content on top of slider */}
      {areImagesLoaded && children}

      {/* Animated image slider */}
      <AnimatePresence>
        {areImagesLoaded && (
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial={{scale: 1, opacity: 0}}
            animate={{scale: 1.1, opacity: 1}}
            exit={{
              opacity: 0,
              scale: 1.05,
              y: direction === "up" ? "-100%" : "100%",
              transition: {duration: 2},
            }}
            transition={{
              duration: 6,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
      </AnimatePresence>
    </section>
  )
}
