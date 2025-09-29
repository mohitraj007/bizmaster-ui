import { useState } from 'react';
import { ArrowLeft, User, CreditCard, Settings, Mail, Phone, Building2, Calendar, DollarSign, Shield, Bell, Globe } from 'lucide-react';
import bizmasterLogo from '../assets/the_bizmaster_logo_horizontal.svg';

interface DashboardProps {
  user: { name: string; email: string };
  onLogout: () => void;
  onBackToHome: () => void;
}

export function Dashboard({ user, onLogout, onBackToHome }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'billing' | 'settings'>('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <img src={bizmasterLogo} alt="The BizMaster" className="h-8" />
              <span className="text-gray-300">|</span>
              <h1 className="text-xl text-[#002B49]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onBackToHome}
                className="flex items-center gap-2 text-gray-600 hover:text-[#E84A34] transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </button>
              <button
                onClick={onLogout}
                className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E84A34] to-[#F4B942] flex items-center justify-center mx-auto mb-3">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-lg text-[#002B49]">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-5 w-5" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'billing'
                      ? 'bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Billing
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-gray-700 mb-2">Company</label>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          defaultValue="My Startup Inc."
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-4">Account Stats</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-gray-600">Member Since</span>
                      </div>
                      <p className="text-2xl text-[#002B49]">Jan 2026</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Canvases Created</span>
                      </div>
                      <p className="text-2xl text-[#002B49]">12</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="text-sm text-gray-600">Current Plan</span>
                      </div>
                      <p className="text-2xl text-[#002B49]">Free</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Current Plan</h3>
                  
                  <div className="bg-gradient-to-br from-[#002B49] to-[#003d5c] rounded-xl p-6 text-white mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl mb-2">Free Plan</h4>
                        <p className="text-blue-100">3 generations remaining this month</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl">$0</p>
                        <p className="text-sm text-blue-100">per month</p>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                      Upgrade to Pro
                    </button>
                  </div>

                  <h4 className="text-lg text-[#002B49] mb-4">Upgrade Options</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#E84A34] transition-colors">
                      <h5 className="text-lg text-[#002B49] mb-2">Pro</h5>
                      <p className="text-3xl text-[#002B49] mb-2">$49<span className="text-sm text-gray-500">/month</span></p>
                      <p className="text-sm text-gray-600 mb-4">Unlimited generations & advanced features</p>
                      <button className="w-full border-2 border-[#E84A34] text-[#E84A34] px-4 py-2 rounded-lg hover:bg-[#E84A34] hover:text-white transition-colors">
                        Select Plan
                      </button>
                    </div>
                    <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#E84A34] transition-colors">
                      <h5 className="text-lg text-[#002B49] mb-2">Enterprise</h5>
                      <p className="text-3xl text-[#002B49] mb-2">Custom</p>
                      <p className="text-sm text-gray-600 mb-4">Tailored solutions for large teams</p>
                      <button className="w-full border-2 border-[#E84A34] text-[#E84A34] px-4 py-2 rounded-lg hover:bg-[#E84A34] hover:text-white transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Payment Method</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="text-[#002B49]">No payment method on file</p>
                        <p className="text-sm text-gray-500">Add a payment method to upgrade</p>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Add Card
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Billing History</h3>
                  
                  <div className="text-center py-8 text-gray-500">
                    <DollarSign className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>No billing history yet</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-[#002B49]">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates via email</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E84A34] peer-checked:to-[#F4B942]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-[#002B49]">Marketing Emails</p>
                          <p className="text-sm text-gray-500">Receive product updates and tips</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E84A34] peer-checked:to-[#F4B942]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Security</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Change Password</label>
                      <button className="flex items-center gap-2 text-[#E84A34] hover:text-[#F4B942] transition-colors">
                        <Shield className="h-5 w-5" />
                        Update Password
                      </button>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[#002B49] mb-2">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account</p>
                      <button className="bg-gradient-to-r from-[#E84A34] to-[#F4B942] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl text-[#002B49] mb-6">Preferences</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Language</label>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <select className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E84A34]">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <h3 className="text-xl text-red-900 mb-2">Danger Zone</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
