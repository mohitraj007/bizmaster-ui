import { ArrowRight, Lightbulb, TrendingUp, Users, Sparkles, Brain, Zap } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#002B49] via-[#003d5c] to-[#002B49] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B942] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E84A34] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(244, 185, 66, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 185, 66, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="h-5 w-5 text-[#F4B942]" />
            <span className="text-sm">AI-Powered Business Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Master Your Business Strategy with{' '}
            <span className="bg-gradient-to-r from-[#F4B942] via-[#E84A34] to-[#F4B942] bg-clip-text text-transparent animate-gradient">
              AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business ideas into actionable models with AI-powered guidance and expert development strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-[#E84A34]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('ai-tool');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Try AI Tool
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E84A34] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">AI-Powered Insights</h3>
            <p className="text-blue-100">
              Generate comprehensive business model canvases using cutting-edge AI technology tailored to your specific needs
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E84A34] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">Strategic Growth</h3>
            <p className="text-blue-100">
              Expert guidance and proven methodologies to accelerate your business development and achieve sustainable growth
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E84A34] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">Expert Support</h3>
            <p className="text-blue-100">
              Connect with experienced business development professionals who understand your challenges and goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}