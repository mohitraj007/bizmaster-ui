import { useState } from 'react';
import { Sparkles, Send, Cpu } from 'lucide-react';

export function AIToolSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    targetCustomer: '',
    valueProposition: '',
    revenueModel: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCanvas, setGeneratedCanvas] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation (will be replaced with actual API call)
    setTimeout(() => {
      setGeneratedCanvas({
        keyPartners: 'Strategic suppliers, technology partners, distribution channels',
        keyActivities: 'Product development, marketing, customer support, sales',
        keyResources: 'Technical infrastructure, skilled team, brand reputation, customer data',
        valuePropositions: formData.valueProposition || 'Innovative solution addressing customer pain points',
        customerRelationships: 'Personalized service, community building, automated support',
        channels: 'Online platform, social media, direct sales, partner networks',
        customerSegments: formData.targetCustomer || 'Target market segment',
        costStructure: 'Development costs, marketing expenses, operational overhead, staff salaries',
        revenueStreams: formData.revenueModel || 'Subscription fees, transaction fees, premium features'
      });
      setIsGenerating(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="ai-tool" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#002B49] via-[#00487a] to-[#002B49] relative overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-[#F4B942] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#E84A34] rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#F4B942] rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(244, 185, 66, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 185, 66, 0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <Cpu className="h-5 w-5 text-[#F4B942] animate-pulse" />
            <span className="text-white">AI-Powered Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Business Model Canvas{' '}
            <span className="bg-gradient-to-r from-[#F4B942] to-[#E84A34] bg-clip-text text-transparent">
              Generator
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Generate a comprehensive business model canvas tailored to your business in seconds
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm mb-2 text-gray-700">
                  Business Name
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="e.g., TechStart Solutions"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm mb-2 text-gray-700">
                  Industry
                </label>
                <input
                  id="industry"
                  type="text"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  placeholder="e.g., SaaS, E-commerce, Consulting"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="targetCustomer" className="block text-sm mb-2 text-gray-700">
                  Target Customer
                </label>
                <input
                  id="targetCustomer"
                  type="text"
                  value={formData.targetCustomer}
                  onChange={(e) => handleInputChange('targetCustomer', e.target.value)}
                  placeholder="e.g., Small businesses, Millennials"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="revenueModel" className="block text-sm mb-2 text-gray-700">
                  Revenue Model
                </label>
                <input
                  id="revenueModel"
                  type="text"
                  value={formData.revenueModel}
                  onChange={(e) => handleInputChange('revenueModel', e.target.value)}
                  placeholder="e.g., Subscription, One-time payment"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="valueProposition" className="block text-sm mb-2 text-gray-700">
                Value Proposition
              </label>
              <textarea
                id="valueProposition"
                value={formData.valueProposition}
                onChange={(e) => handleInputChange('valueProposition', e.target.value)}
                placeholder="Describe what makes your business unique and valuable to customers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-[#E84A34]/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  AI is Generating Your Canvas...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Generate with AI
                </>
              )}
            </button>
          </form>

          {/* Generated Canvas */}
          {generatedCanvas && (
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-[#F4B942]" />
                <h3 className="text-2xl text-[#002B49] text-center">Your AI-Generated Business Model Canvas</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-[#002B49]">Key Partners</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.keyPartners}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-[#002B49]">Key Activities</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.keyActivities}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-[#002B49]">Key Resources</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.keyResources}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-green-900">Value Propositions</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.valuePropositions}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-[#002B49]">Customer Relationships</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.customerRelationships}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-[#002B49]">Channels</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.channels}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-purple-900">Customer Segments</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.customerSegments}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-orange-900">Cost Structure</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.costStructure}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-sm mb-2 text-green-900">Revenue Streams</h4>
                  <p className="text-sm text-gray-700">{generatedCanvas.revenueStreams}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}