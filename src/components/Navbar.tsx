import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import bizmasterLogo from '../assets/the_bizmaster_logo_horizontal.svg';

interface NavbarProps {
  onLoginClick: () => void;
  currentUser: { name: string; email: string } | null;
  onLogout: () => void;
  onDashboardClick: () => void;
}

export function Navbar({ onLoginClick, currentUser, onLogout, onDashboardClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <img src={bizmasterLogo} alt="The BizMaster" className="h-8" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('ai-tool')}
              className="text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              AI Free Tool
            </button>
            
            {currentUser ? (
              <div 
                className="relative"
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                <button className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <User className="h-5 w-5" />
                </button>
                
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm text-[#002B49]">{currentUser.name}</p>
                      <p className="text-xs text-gray-500">{currentUser.email}</p>
                    </div>
                    <button
                      onClick={onDashboardClick}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </button>
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#E84A34]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('ai-tool')}
              className="block w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors"
            >
              AI Free Tool
            </button>
            
            {currentUser ? (
              <>
                <button
                  onClick={onDashboardClick}
                  className="w-full text-left text-gray-700 hover:text-[#E84A34] transition-colors flex items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
