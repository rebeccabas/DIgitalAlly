import React from 'react';
import { Shield, Heart, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-24 sm:py-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                <span className="block mb-2">Empowering Women</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                  Protecting Rights
                </span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                Join our global initiative to protect and amplify women's rights. Report incidents, access resources, and connect with support networks worldwide.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#report"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Report Incident
                  <Shield className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a
                  href="#resources"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-base font-medium rounded-xl text-purple-600 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Find Resources
                  <Heart className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}