"use client"

import { useEffect, useState } from "react"
import { Users, Camera } from "lucide-react"
import { ChevronRight } from "lucide-react"

const tabs = [
  { id: "odometer", label: "Odometer Check" },
  { id: "ownership", label: "Ownership History" },
  { id: "photos", label: "Photos on Sale" },
]

export default function ReportSection() {
  const [activeTab, setActiveTab] = useState("odometer")
  const [progress, setProgress] = useState(0)
  const [isSwitching, setIsSwitching] = useState(false)

  // Auto progress for the active tab, then advance to the next tab
  useEffect(() => {
    setProgress(0)
    const durationMs = 4000
    const stepMs = 50
    const increment = 100 / (durationMs / stepMs)

    const intervalId = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(intervalId)
          const currentIndex = tabs.findIndex((t) => t.id === activeTab)
          const nextTab = tabs[(currentIndex + 1) % tabs.length].id
          // Smoothly fade out then advance
          setIsSwitching(true)
          setTimeout(() => {
            setActiveTab(nextTab)
            setIsSwitching(false)
          }, 200)
          return 100
        }
        return next
      })
    }, stepMs)

    return () => clearInterval(intervalId)
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case "odometer":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20173455-eGTZG5YWuaHOQS8Ai3DsVm0s5w952q.png"
                alt="Odometer chart"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )
      case "ownership":
        return (
          <div className="bg-white rounded-lg p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20173510-odQT98fnfHGqBzFopW4Se23TIAfYgK.png"
              alt="Ownership history"
              className="w-full rounded-lg"
            />
          </div>
        )
      case "photos":
        return (
          <div className="bg-white rounded-lg p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20173527-8PyALbKB5AfmY2EZYXyWRy4fCRF6Ku.png"
              alt="Photos on sale"
              className="w-full rounded-lg"
            />
          </div>
        )
      default:
        return <div className="text-center py-12 text-gray-500">Select a tab to view details</div>
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 font-medium mb-12">
          Uncover comprehensive insights with an EpicVIN Vehicle History Report
        </p>

        {/* Tabs with individual progress bars */}
        <div className="flex flex-wrap items-end gap-10 mb-12">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col items-center gap-2">
              <button
                onClick={() => {
                  if (activeTab === tab.id) return
                  setIsSwitching(true)
                  setTimeout(() => {
                    setActiveTab(tab.id)
                    setIsSwitching(false)
                  }, 150)
                }}
                className={`pb-1 font-bold text-base transition-colors ${
                  activeTab === tab.id ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
              <div className="h-2 w-40 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-[width] duration-100 ease-linear ${
                    activeTab === tab.id ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  style={{ width: `${activeTab === tab.id ? progress : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className={`lg:col-span-2 transition-opacity duration-300 ${isSwitching ? "opacity-0" : "opacity-100"}`}>{renderContent()}</div>

          {/* Right sidebar */}
          <div className={`space-y-6 transition-opacity duration-300 ${isSwitching ? "opacity-0" : "opacity-100"}`}>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-blue-200">
                {activeTab === "ownership" ? (
                  <Users className="w-9 h-9 text-blue-500" />
                ) : activeTab === "photos" ? (
                  <Camera className="w-9 h-9 text-blue-500" />
                ) : (
                  <div className="text-blue-500 text-3xl">📊</div>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black">
              {activeTab === "odometer" && "Past Odometer Readings - Has the odometer ever been rolled back?"}
              {activeTab === "ownership" && "How was the car previously used? Was it a prior taxi or a rental car?"}
              {activeTab === "photos" && "Photos of Previous Sales - Has this vehicle previously been listed for sale?"}
            </h3>
            <button className="w-full bg-yellow-400 hover:bg-black hover:text-white text-black font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-colors shadow-md ring-2 ring-yellow-300 hover:ring-black">
              Check Your Car <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
