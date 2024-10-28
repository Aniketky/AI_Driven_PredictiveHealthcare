import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">HealthChain AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Platform</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Research</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Platform</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Research</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}