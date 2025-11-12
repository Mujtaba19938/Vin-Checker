import { ThumbsUp as Thumbs, Mail, Clock } from "lucide-react"

export default function SupportSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Avatar group */}
        <div className="flex justify-center -space-x-3">
          <img
            src="/pngtree-business-focused-real-estate-agent-in-formal-wear-promoting-housing-client-png-image_14295787-removebg-preview.png"
            alt="Support agent 1"
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
          <img
            src="/pngtree-real-estate-agent-in-formal-suit-with-model-house-representing-property-png-image_14295790.png"
            alt="Support agent 2"
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
          <img
            src="/18-184611_business-woman-standing-png-real-estate-agent-png-removebg-preview.png"
            alt="Support agent 3"
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Dedicated Customer Support: We're Here to Help
          </h2>
          <p className="text-gray-600 text-lg">
            Our support team is always ready to assist you. Simply drop us a message, and we'll promptly respond to
            ensure a seamless experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex justify-center">
              <Thumbs className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-black">98%</h3>
            <p className="text-gray-600">Satisfaction rate</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center">
              <Mail className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-black">10 minutes</h3>
            <p className="text-gray-600">Avg. response time</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center">
              <Clock className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-black">24/7</h3>
            <p className="text-gray-600">Chat Availability</p>
          </div>
        </div>
      </div>
    </section>
  )
}
