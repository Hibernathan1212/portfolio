"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, X, Camera, MapPin, Calendar } from "lucide-react"

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Photo categories
  const categories = [
    { id: "all", name: "All Photos" },
    { id: "landscape", name: "Landscape" },
    { id: "street", name: "Street" },
    { id: "portrait", name: "Portrait" },
    { id: "architecture", name: "Architecture" },
    { id: "nature", name: "Nature" },
  ]

  // Photo collection with metadata
  const photos = [
    {
      id: 1,
      title: "Doi Suthep Temple at Sunset",
      description:
        "The golden pagodas of Doi Suthep Temple catching the last light of day, overlooking Chiang Mai city.",
      date: "June 2023",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Doi+Suthep+Temple",
    },
    {
      id: 2,
      title: "Sunday Walking Street Market",
      description: "The vibrant colors and bustling energy of Chiang Mai's famous Sunday night market.",
      date: "May 2023",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=800&text=Sunday+Market",
    },
    {
      id: 3,
      title: "Portrait of a Hill Tribe Elder",
      description:
        "A portrait capturing the wisdom and character of an elder from one of Northern Thailand's hill tribes.",
      date: "April 2023",
      location: "Mae Hong Son, Thailand",
      src: "/placeholder.svg?height=800&width=600&text=Hill+Tribe+Elder",
    },
    {
      id: 4,
      title: "Ancient City Walls",
      description:
        "The historic walls surrounding Chiang Mai's old city, with their distinctive red brick construction.",
      date: "March 2023",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Ancient+City+Walls",
    },
    {
      id: 5,
      title: "Misty Mountain Morning",
      description:
        "Layers of mountains disappearing into the morning mist, captured from a viewpoint in Doi Inthanon National Park.",
      date: "February 2023",
      location: "Doi Inthanon, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Misty+Mountains",
    },
    {
      id: 6,
      title: "Tropical Flower Close-up",
      description: "Macro photography of an exotic tropical flower found in the gardens of Chiang Mai.",
      date: "January 2023",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=800&text=Tropical+Flower",
    },
    {
      id: 7,
      title: "Lantern Festival",
      description:
        "The magical scene of thousands of paper lanterns being released into the night sky during Yi Peng festival.",
      date: "November 2022",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Lantern+Festival",
    },
    {
      id: 8,
      title: "Rice Terraces",
      description: "The geometric patterns of rice terraces cascading down the hillsides in Northern Thailand.",
      date: "October 2022",
      location: "Chiang Rai, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Rice+Terraces",
    },
    {
      id: 9,
      title: "White Temple",
      description: "The intricate and otherworldly architecture of Wat Rong Khun (White Temple) in Chiang Rai.",
      date: "September 2022",
      location: "Chiang Rai, Thailand",
      src: "/placeholder.svg?height=800&width=1000&text=White+Temple",
    },
    {
      id: 10,
      title: "Street Food Vendor",
      description: "A candid moment capturing a local street food vendor preparing traditional Thai dishes.",
      date: "August 2022",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=800&text=Street+Food+Vendor",
    },
    {
      id: 11,
      title: "Elephant Sanctuary",
      description: "A gentle moment with rescued elephants at an ethical sanctuary near Chiang Mai.",
      date: "July 2022",
      location: "Mae Taeng, Thailand",
      src: "/placeholder.svg?height=800&width=1200&text=Elephant+Sanctuary",
    },
    {
      id: 12,
      title: "Student Portrait",
      description: "A portrait of a local student in traditional dress during a cultural celebration at school.",
      date: "June 2022",
      location: "Chiang Mai, Thailand",
      src: "/placeholder.svg?height=800&width=600&text=Student+Portrait",
    },
  ]

  // Helper functions for navigation
  const goToNextPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto !== photos.length) {
      const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto)
      const nextIndex = (currentIndex + 1) % photos.length
      setSelectedPhoto(photos[nextIndex].id)
    }
  }

  const goToPrevPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto !== 1) {
      const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto)
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length
      setSelectedPhoto(photos[prevIndex].id)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto !== null) {
        if (e.key === "ArrowRight") {
          goToNextPhoto()
        } else if (e.key === "ArrowLeft") {
          goToPrevPhoto()
        } else if (e.key === "Escape") {
          setSelectedPhoto(null)
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedPhoto])

  // Filter photos based on selected category
  // const filteredPhotos =
  //   activeCategory && activeCategory !== "all" ? photos.filter((photo) => photo.category === activeCategory) : photos

  const filteredPhotos = photos

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">VISUALS</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Photography</h1>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-zinc-400 leading-relaxed text-center">
              Photography is a newer hobby of mine, more or less just for fun. These are some of my favorites.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        {/* <div className="mb-12">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  activeCategory === category.id || (category.id === "all" && activeCategory === null)
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div> */}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div
                className={`aspect-square bg-zinc-900 relative overflow-hidden rounded-lg`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="font-light text-white">{photo.title}</h3>
                    <div className="flex items-center text-xs text-zinc-300 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {photo.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400">No photos found in this category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors duration-300"
            >
              Show All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button className="absolute top-6 right-6 z-10" onClick={() => setSelectedPhoto(null)}>
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Arrows */}
          {selectedPhoto !== 1 && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2"
              onClick={(e) => {
              e.stopPropagation()
              goToPrevPhoto()
              }}
            >
              <ArrowLeft className="h-8 w-8" />
            </button>
          )}
          {selectedPhoto !== photos.length && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2"
              onClick={(e) => {
                e.stopPropagation()
                goToNextPhoto()
              }}
            >
              <ArrowRight className="h-8 w-8" />
            </button>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-5xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedPhoto && (
              <>
                <div className="relative aspect-auto w-full max-h-[60vh] flex items-center justify-center">
                  <Image
                    src={photos.find((p) => p.id === selectedPhoto)?.src || ""}
                    alt={photos.find((p) => p.id === selectedPhoto)?.title || ""}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[60vh]"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-light">{photos.find((p) => p.id === selectedPhoto)?.title}</h3>
                  <p className="text-zinc-400 mt-2">{photos.find((p) => p.id === selectedPhoto)?.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                      {photos.find((p) => p.id === selectedPhoto)?.date}
                    </div>
                    <div className="flex items-center text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                      {photos.find((p) => p.id === selectedPhoto)?.location}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
