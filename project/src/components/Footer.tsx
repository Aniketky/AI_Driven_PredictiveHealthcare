import React from 'react';
import { Activity, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HealthChain AI</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Transforming healthcare through AI and blockchain technology. 
              Making predictive health accessible to everyone, everywhere.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Research Papers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 HealthChain AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}