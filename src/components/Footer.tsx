import React from 'react';
import { Shield, Heart, Globe, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">Digital Ally</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering women worldwide through technology and community support.
              Together we can make a difference.
            </p>
            <div className="mt-6 flex space-x-6">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Emergency Help
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Legal Aid
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Education
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Digital Ally for Women's Rights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}