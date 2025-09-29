import { X, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => boolean;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showResetPassword, setShowResetPassword] = useState(false);
  
  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Sign up form
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [signupError, setSignupError] = useState('');
  
  // Reset password
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    const success = onLogin(loginEmail, loginPassword);
    if (!success) {
      setLoginError('Invalid credentials. Try user/pass for demo.');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    
    if (signupData.password !== signupData.confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }
    
    if (signupData.password.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }
    
    // For now, just show success (will be integrated with Supabase later)
    alert('Sign up functionality will be available soon!');
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset
    setTimeout(() => {
      setResetSuccess(true);
      setTimeout(() => {
        setShowResetPassword(false);
        setResetSuccess(false);
        setResetEmail('');
      }, 2000);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login will be available soon!');
  };

  if (showResetPassword) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-gray-100">
          <button
            onClick={() => setShowResetPassword(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-6">
            <h2 className="text-2xl text-[#002B49] mb-2">Reset Password</h2>
            <p className="text-gray-600">
              Enter your email and we'll send you a reset link
            </p>
          </div>

          {resetSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Password reset link sent! Check your email.
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#E84A34]/30 transition-all duration-300"
              >
                Send Reset Link
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-gray-100 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 rounded-md transition-all ${
              activeTab === 'login'
                ? 'bg-white text-[#002B49] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-2 rounded-md transition-all ${
              activeTab === 'signup'
                ? 'bg-white text-[#002B49] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl text-[#002B49] mb-2">Welcome Back</h2>
              <p className="text-gray-600">Log in to continue to The Biz Master</p>
            </div>

            {loginError && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-lg px-4 py-3 hover:border-[#E84A34] hover:bg-gray-50 transition-all duration-300 mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-700">Continue with Google</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowResetPassword(true)}
                  className="text-sm text-[#E84A34] hover:text-[#F4B942] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#E84A34]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Lock className="h-5 w-5" />
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl text-[#002B49] mb-2">Create Account</h2>
              <p className="text-gray-600">Sign up to access AI-powered business tools</p>
            </div>

            {signupError && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {signupError}
              </div>
            )}

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({...signupData, firstName: e.target.value})}
                    placeholder="John"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({...signupData, lastName: e.target.value})}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  Company Name (Optional)
                </label>
                <input
                  id="company"
                  type="text"
                  value={signupData.company}
                  onChange={(e) => setSignupData({...signupData, company: e.target.value})}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E84A34] transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#E84A34]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Create Account
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
