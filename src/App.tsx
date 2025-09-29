import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LoginModal } from './components/LoginModal';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { AIToolSection } from './components/AIToolSection';
import { ContactSection } from './components/ContactSection';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard'>('home');

  const handleLogin = (email: string, password: string) => {
    // Fake login
    if (email === 'user@thebizmaster.com' && password === 'pass') {
      setCurrentUser({ name: 'John Doe', email: 'user@thebizmaster.com' });
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'dashboard' && currentUser) {
    return (
      <Dashboard 
        user={currentUser}
        onLogout={handleLogout}
        onBackToHome={() => setCurrentPage('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onLoginClick={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        onDashboardClick={handleDashboardClick}
      />
      
      <main>
        <HeroSection onGetStarted={() => setIsLoginModalOpen(true)} />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <AIToolSection />
        <ContactSection />
      </main>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
