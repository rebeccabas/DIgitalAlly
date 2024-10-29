import React from 'react';
import { Phone, Book, Users, Headphones } from 'lucide-react';

export default function ResourceHub() {
  const resources = [
    {
      title: "Emergency Hotlines",
      description: "24/7 crisis support and emergency services",
      icon: Phone,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Legal Resources",
      description: "Access free legal aid and documentation",
      icon: Book,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Support Groups",
      description: "Connect with local support networks",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Counseling",
      description: "Professional mental health support",
      icon: Headphones,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resource Hub
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Access support services and educational resources
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`${resource.bgColor} rounded-lg p-3 inline-block`}>
                  <resource.icon className={`h-6 w-6 ${resource.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {resource.description}
                </p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:px-12 text-center">
            <h3 className="text-2xl font-bold text-white">
              Need Immediate Assistance?
            </h3>
            <p className="mt-4 text-purple-100">
              Our support team is available 24/7 to help you in any emergency situation
            </p>
            <button className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300">
              Contact Support Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}