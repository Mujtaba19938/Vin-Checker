"use client"

import { useState } from "react"

interface VehicleData {
  make: string
  model: string
  year: string
  engine: string
  manufacturer: string
}

export default function VinLookup() {
  const [vin, setVin] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [vehicle, setVehicle] = useState<VehicleData | null>(null)

  const handleSearch = async () => {
    if (vin.trim().length !== 17) {
      setError("Please enter a valid 17-character VIN number.")
      return
    }

    setError("")
    setLoading(true)
    setVehicle(null)

    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`
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

  return (
    <div className="vin-lookup-container">
      {error && <p className="vin-error">{error}</p>}
      {vehicle && (
        <div className="vin-result">
          <h3 className="text-xl font-bold text-black mb-4">Vehicle Details</h3>
          <div className="space-y-2">
            <p><strong>Make:</strong> {vehicle.make || "N/A"}</p>
            <p><strong>Model:</strong> {vehicle.model || "N/A"}</p>
            <p><strong>Year:</strong> {vehicle.year || "N/A"}</p>
            <p><strong>Engine:</strong> {vehicle.engine || "N/A"}</p>
            <p><strong>Manufacturer:</strong> {vehicle.manufacturer || "N/A"}</p>
            <p><strong>VIN:</strong> {vin}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export { type VehicleData }

