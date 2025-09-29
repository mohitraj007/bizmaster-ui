import { Check, Zap, Crown, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Zap,
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with AI-powered business planning',
    features: [
      '3 Business Model Canvas generations per month',
      'Basic AI insights',
      'Community support',
      'Access to free resources',
      'Mobile app access'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '$49',
    period: 'per month',
    description: 'For entrepreneurs and growing businesses',
    features: [
      'Unlimited Business Model Canvas generations',
      'Advanced AI insights & recommendations',
      'Priority email support',
      'Export to PDF & other formats',
      'Collaboration tools (up to 5 team members)',
      'Custom branding',
      'Analytics dashboard',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: 'contact us',
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom AI model training',
      'White-label solutions',
      'Advanced security & compliance',
      'Custom integrations',
      'On-premise deployment option'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#E84A34]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4B942]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002B49]">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core AI-powered features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-[#E84A34] scale-105'
                    : 'border-gray-200 hover:border-[#E84A34]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-4 py-1 rounded-full text-sm shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-br from-[#E84A34] to-[#F4B942]'
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-[#002B49]'}`} />
                    </div>
                    <h3 className="text-2xl text-[#002B49]">{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#002B49]">{plan.price}</span>
                      {plan.price !== 'Custom' && (
                        <span className="text-gray-500">/{plan.period}</span>
                      )}
                    </div>
                    {plan.price === 'Custom' && (
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <button
                    className={`w-full py-3 rounded-lg transition-all duration-300 mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white hover:shadow-lg hover:shadow-[#E84A34]/30'
                        : 'border-2 border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include a 14-day money-back guarantee. No credit card required for Free plan.
          </p>
        </div>
      </div>
    </section>
  );
}
