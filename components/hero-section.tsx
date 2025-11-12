"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

interface VehicleData {
  make: string
  model: string
  year: string
  engine: string
  manufacturer: string
}

export default function HeroSection() {
  const [searchType, setSearchType] = useState("vin")
  const [vinInput, setVinInput] = useState("")
  const [plateInput, setPlateInput] = useState("")
  const [plateState, setPlateState] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [vehicle, setVehicle] = useState<VehicleData | null>(null)

  const handleVinSearch = async () => {
    if (vinInput.trim().length !== 17) {
      setError("Please enter a valid 17-character VIN number.")
      return
    }

    setError("")
    setLoading(true)
    setVehicle(null)

    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinInput.toUpperCase()}?format=json`
      )
      const data = await response.json()

      const result = data.Results.reduce((acc: VehicleData, item: any) => {
        if (item.Variable === "Make") acc.make = item.Value || ""
        if (item.Variable === "Model") acc.model = item.Value || ""
        if (item.Variable === "Model Year") acc.year = item.Value || ""
        if (item.Variable === "Engine Model" || item.Variable === "Engine Configuration")
          acc.engine = item.Value || ""
        if (item.Variable === "Manufacturer Name") acc.manufacturer = item.Value || ""
        return acc
      }, {} as VehicleData)

      if (!result.make && !result.model) {
        setError("No data found for this VIN. Please verify and try again.")
      } else {
        setVehicle(result)
      }
    } catch (err) {
      setError("Error fetching data. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchType === "vin") {
      handleVinSearch()
    }
  }

  return (
    <>
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Car image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngimg.com_-_mercedes_PNG80195-removebg-preview-w1T54EHJEHumgVA7cg7zqqSd3dyDjX.png"
                alt="Mercedes SUV"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-500 font-medium text-lg mb-2">Are you worried about buying a used car?</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal text-black mb-4 max-w-2xl">
                VIN Check Can Save You Thousands — Get a Full Vehicle History Report
              </h1>
              <p className="text-gray-600 text-lg">Free VIN check - find any vehicle by VIN</p>
            </div>

            {/* Search form */}
            <div className="space-y-4">
              {/* Segmented tabs */}
              <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
                <button
                  onClick={() => setSearchType("vin")}
                  className={`px-5 py-2 text-base font-semibold rounded-full transition-colors ${
                    searchType === "vin"
                      ? "bg-black text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  by VIN
                </button>
                <button
                  onClick={() => setSearchType("plate")}
                  className={`px-5 py-2 text-base font-semibold rounded-full transition-colors ${
                    searchType === "plate"
                      ? "bg-black text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  by US License Plate
                </button>
              </div>

              <div className="flex items-center rounded-full bg-white border-[3px] border-yellow-400 shadow-[0_10px_24px_rgba(255,185,0,0.25)] ring-1 ring-yellow-300 ring-offset-2 ring-offset-white transition-colors p-1.5 md:p-2">
                {searchType === "vin" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Enter VIN Number (e.g., 1HGCM82633A004352)"
                      value={vinInput}
                      onChange={(e) => setVinInput(e.target.value.toUpperCase())}
                      onKeyDown={handleKeyDown}
                      maxLength={17}
                      className="flex-1 px-6 py-4 focus:outline-none text-gray-700 placeholder-gray-400 font-medium bg-transparent"
                    />
                    <button 
                      onClick={handleVinSearch}
                      disabled={loading}
                      className={`
                        flex items-center gap-2 font-bold py-3.5 px-8 rounded-full 
                        transition-all duration-300 whitespace-nowrap ml-1 mr-1.5 md:ml-2 md:mr-2
                        ${loading 
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-[#FFD700] text-black hover:bg-black hover:text-white'
                        }
                      `}
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                        border: 'none',
                        outline: 'none'
                      }}
                    >
                      {loading ? "Checking..." : "Check VIN"} <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="License Plate"
                      value={plateInput}
                      onChange={(e) => setPlateInput(e.target.value)}
                      className="flex-1 px-6 py-4 focus:outline-none text-gray-700 placeholder-gray-400 font-medium bg-transparent"
                    />
                    <span className="hidden sm:block h-8 w-px bg-gray-200" />
                    <div className="relative px-4 hidden sm:flex items-center">
                      <select
                        aria-label="State"
                        value={plateState}
                        onChange={(e) => setPlateState(e.target.value)}
                        className="appearance-none bg-transparent pr-6 pl-0 py-2 focus:outline-none text-gray-700 placeholder-gray-400 font-semibold"
                      >
                        <option value="" disabled>
                          State
                        </option>
                        {[
                          "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
                        ].map((abbr) => (
                          <option key={abbr} value={abbr}>{abbr}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none" />
                    </div>
                    <button className="bg-yellow-400 hover:bg-black hover:text-white text-black font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors whitespace-nowrap ml-1 mr-1.5 md:ml-2 md:mr-2 shadow-md ring-2 ring-yellow-300 hover:ring-black">
                      Check Plate <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Helper links */}
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <a href="#" className="hover:underline">
                  Where to find the VIN?
                </a>
                <span>•</span>
                <span>No VIN?</span>
                <a href="#" className="text-blue-500 hover:underline font-medium">
                  Get EpicVIN reports
                </a>
              </div>

              {/* Error message */}
              {error && <p className="vin-error text-red-600 font-medium mt-2">{error}</p>}

              {/* Vehicle results */}
              {vehicle && (
                <div className="vin-result mt-6">
                  <h3 className="text-xl font-bold text-black mb-4">Vehicle Details</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Make:</strong> {vehicle.make || "N/A"}</p>
                    <p><strong>Model:</strong> {vehicle.model || "N/A"}</p>
                    <p><strong>Year:</strong> {vehicle.year || "N/A"}</p>
                    <p><strong>Engine:</strong> {vehicle.engine || "N/A"}</p>
                    <p><strong>Manufacturer:</strong> {vehicle.manufacturer || "N/A"}</p>
                    <p><strong>VIN:</strong> {vinInput}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Partner logos strip under hero */}
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-6 sm:gap-8 md:gap-12 text-gray-400 opacity-80">
          {/* Replace spans with <img /> tags when real assets are available */}
          <span className="text-2xl sm:text-3xl font-semibold">Forbes</span>
          <span className="text-2xl sm:text-3xl font-semibold">Copart</span>
          <span className="text-2xl sm:text-3xl font-semibold">SCA</span>
          <span className="text-2xl sm:text-3xl font-semibold">NMVTIS</span>
          <span className="text-2xl sm:text-3xl font-semibold">NICB</span>
          <span className="text-2xl sm:text-3xl font-semibold">NHTSA</span>
        </div>
      </div>
    </section>
    </>
  )
}
