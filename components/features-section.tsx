import { ChevronRight } from "lucide-react"

const features = [
  {
    title: "By VIN & Plate",
    subtitle: "Free VIN Check:",
    icon: "✓",
  },
  {
    title: "45,000+",
    subtitle: "Daily VIN Searches:",
    icon: "✓",
  },
  {
    title: "70 Databases",
    subtitle: "VIN Checked On:",
    icon: "✓",
  },
  {
    title: "Extensive History",
    subtitle: "Full Vehicle History Report:",
    icon: "✓",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Feature boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-lg">
              <p className="text-green-600 font-medium text-sm mb-2">
                {feature.icon} {feature.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Skip the headache - run a free 30-second VIN Lookup.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              About 40 percent of used cars on U.S. roads carry documented accident damage, and nearly 20 percent still
              sit under an open safety recall. One quick, free VIN check can flag those issues, catch odometer
              tampering, and expose any title washing long before your money leaves your pocket.
            </p>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
              Check Your Vin For Free <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20171742-6KCV5zxxLfATceMIVyJ5hnc2UtE5UT.png"
              alt="Damaged car with play button"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
