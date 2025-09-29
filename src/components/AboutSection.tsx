import { Target, Zap, Award, Shield } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B942]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002B49]">About The Biz Master</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We empower entrepreneurs and businesses with AI-driven tools and expert guidance to transform ideas into successful ventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl mb-4 text-[#002B49]">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              At The Biz Master, we believe that every great business starts with a solid foundation. Our mission is to democratize access to professional business development tools and expertise through innovative AI technology.
            </p>
            <p className="text-gray-600">
              We combine years of business consulting experience with cutting-edge artificial intelligence to provide actionable insights and strategic frameworks that drive real results.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#002B49] to-[#003d5c] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl mb-4">What We Offer</h3>
            <p className="text-blue-100 mb-4">
              Our AI-powered Business Model Canvas generator helps you map out your business strategy in minutes, not weeks. Simply provide key inputs about your business idea, and our intelligent system creates a comprehensive, customized business model.
            </p>
            <p className="text-blue-100">
              Beyond tools, we provide strategic guidance, best practices, and ongoing support to ensure your business thrives in today's competitive landscape.
            </p>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#E84A34] to-[#F4B942] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-[#002B49]">Strategic Focus</h4>
            <p className="text-gray-600 text-sm">
              Clear direction for your business goals
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#E84A34] to-[#F4B942] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-[#002B49]">Fast Results</h4>
            <p className="text-gray-600 text-sm">
              Generate insights in minutes, not days
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#E84A34] to-[#F4B942] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-[#002B49]">Proven Methods</h4>
            <p className="text-gray-600 text-sm">
              Based on industry best practices
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#E84A34] to-[#F4B942] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-[#002B49]">Trusted Guidance</h4>
            <p className="text-gray-600 text-sm">
              Expert support when you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}