"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Liam Syrell",
    rating: 5,
    avatar: "/handsome-man-with-thumb-up-white-background.jpg",
    text: '"Easy to understand, results were very quick, and gave me everything I wanted to know. EpicVin is now where I choose to go to find information about a vehicle."',
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    avatar: "/smiling-woman-with-thumb-up.jpg",
    text: '"The report was comprehensive and easy to read. Helped me make an informed decision about my car purchase."',
  },
  {
    name: "Michael Chen",
    rating: 5,
    avatar: "/man-with-his-hand-hisheart.jpg",
    text: '"Fast, reliable, and worth every penny. Best VIN check service I\'ve used."',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const goToIndex = (idx: number) => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex(idx)
      setIsFading(false)
    }, 300)
  }

  const nextSlide = () => {
    goToIndex((currentIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    goToIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(id)
  }, [currentIndex])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">What Customers Say About EpicVIN</h2>
            <p className="text-gray-600 text-lg mb-8">
              EpicVIN through the eyes of our customers: diverse perspectives and genuine testimonials demonstrating the
              value of our services.
            </p>

            {/* Google rating removed as requested */}
          </div>

          {/* Right carousel */}
          <div className="relative">
            <div className={`rounded-2xl p-8 bg-white/60 backdrop-blur-md ring-1 ring-gray-300/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transform-gpu transition-all duration-500 ease-out ${
              isFading ? "opacity-0 translate-y-1 scale-[0.99]" : "opacity-100 translate-y-0 scale-100"
            }`}>
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].avatar || "/diverse-avatars.png"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonials[currentIndex].name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg">{testimonials[currentIndex].text}</p>
            </div>

            {/* Navigation removed as requested */}
          </div>
        </div>
      </div>
    </section>
  )
}
