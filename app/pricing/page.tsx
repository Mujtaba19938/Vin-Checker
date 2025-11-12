import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 0,
      description: 'Perfect for trying out our service',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        'Email support',
        '1GB storage',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: 29,
      description: 'For growing businesses',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '10GB storage',
        'API access',
      ],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 99,
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Dedicated account manager',
        '24/7 support',
        '100GB storage',
        'API access',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "relative flex flex-col",
                plan.popular ? "ring-2 ring-primary" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${plan.price}
                    <span className="text-base font-normal text-muted-foreground">/month</span>
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, our Starter plan is completely free to use with no time limit.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards and PayPal.'
              }
            ].map((faq, index) => (
              <div key={index} className="text-left">
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <p className="mt-1 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to merge class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
