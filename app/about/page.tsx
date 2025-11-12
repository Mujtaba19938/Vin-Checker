import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { id: 1, name: 'VIN Lookups', value: '1M+', icon: Users },
    { id: 2, name: 'Vehicles in Database', value: '500M+', icon: Target },
    { id: 3, name: 'Happy Customers', value: '100K+', icon: Users },
    { id: 4, name: 'Data Sources', value: '50+', icon: Award },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Automotive industry expert with a passion for vehicle data transparency.'
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Data Engineer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Specializes in vehicle data aggregation and verification systems.'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/29.jpg',
      bio: 'Ensures our VIN reports are comprehensive and user-friendly.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Dedicated to helping customers get the most from our VIN reports.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Our VIN Check Service
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Empowering car buyers and sellers with comprehensive vehicle history reports through advanced VIN lookup technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <dt className="mt-4 text-3xl font-bold text-foreground">{stat.value}</dt>
                <dd className="mt-2 text-sm font-medium text-muted-foreground">{stat.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                Founded by automotive industry veterans, our VIN check service was born from a simple idea: to bring transparency to the used car market. We believe every car buyer and seller deserves access to accurate, comprehensive vehicle history information.
              </p>
              <p>
                Our journey began with a small database of vehicle records and has grown into one of the most trusted sources for VIN lookups. We've processed millions of vehicle history reports, helping customers make informed decisions with confidence.
              </p>
              <p>
                Today, we continue to innovate, constantly expanding our data sources and improving our reporting to provide you with the most detailed and reliable vehicle history information available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The talented people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <Card key={person.name} className="overflow-hidden">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <img 
                    className="h-32 w-32 rounded-full object-cover" 
                    src={person.image} 
                    alt={person.name} 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{person.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Our VIN Check?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Comprehensive Reports',
                  description: "Get detailed vehicle history including accidents, title issues, service records, and more.",
                  icon: Lightbulb
                },
                {
                  title: 'Instant Results',
                  description: "Our advanced system delivers complete VIN reports in seconds, not hours or days.",
                  icon: Award
                },
                {
                  title: 'Data Accuracy',
                  description: "We source information from multiple reliable databases to ensure the most accurate vehicle history.",
                  icon: Users
                }
              ].map((value, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
