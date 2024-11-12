import React from 'react';
import { ChevronLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportGroups = () => {
    const supportgroup = [
      {
        name: "Women for Human Rights (WHR)",
        website: "https://whr.org.np",
        description: "Empowering single women through advocacy, economic opportunities, and legal support.",
        color: "bg-pink-100",
        textColor: "text-pink-800",
        borderColor: "border-pink-200"
      },
      {
        name: "Saathi",
        website: "https://saathi.org.np",
        description: "Supports women and children in crisis, especially victims of domestic violence.",
        color: "bg-blue-100",
        textColor: "text-blue-800",
        borderColor: "border-blue-200"
      },
      {
        name: "Maiti Nepal",
        website: "https://maitinepal.org",
        description: "Helps prevent human trafficking and provides shelter and support for women and children.",
        color: "bg-purple-100",
        textColor: "text-purple-800",
        borderColor: "border-purple-200"
      },
      {
        name: "DidiBahini",
        website: "http://didibahini.org",
        description: "Focuses on gender equality and social justice through education and community programs.",
        color: "bg-green-100",
        textColor: "text-green-800",
        borderColor: "border-green-200"
      },
      {
        name: "TEWA",
        website: "https://tewa.org.np",
        description: "Supports women’s empowerment in rural Nepal through local fundraising and grassroots programs.",
        color: "bg-orange-100",
        textColor: "text-orange-800",
        borderColor: "border-orange-200"
      }
    ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            to="/"
            className="flex items-center text-purple-400 hover:text-purple-300"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Resource Hub
          </Link>
        </div>

        {/* Helplines Container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-black mb-6">Support Groups</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportgroup.map((group) => (
                <div
                  key={group.name}
                  className={`${group.color} rounded-lg p-6 border-2 ${group.borderColor} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${group.color} ${group.textColor}`}>
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${group.textColor}`}>
                        {group.name}
                      </h3>
                      <p className={`mt-2 text-sm ${group.textColor}`}>
                        {group.description}
                      </p>
                      <button 
                        className={`mt-4 px-4 py-2 rounded-md bg-white ${group.textColor} font-medium hover:bg-opacity-90 transition-colors duration-300`}
                        onClick={() => window.open(group.website, '_blank')}
                      >
                        Visit Website
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 bg-red-100 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 text-lg font-semibold">Important Notice</h3>
              <p className="mt-2 text-red-700">
                If you are in immediate danger, please call the Police at 100 immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGroups;
