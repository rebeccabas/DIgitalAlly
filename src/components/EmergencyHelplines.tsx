import React from 'react';
import { ChevronLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyHelplines = () => {
  const helplines = [
    {
      name: "NWC Helpline",
      number: "1145",
      description: "National Women Commission's 24/7 helpline for women in distress",
      color: "bg-pink-100",
      textColor: "text-pink-800",
      borderColor: "border-pink-200"
    },
    {
      name: "CWIN Child Helpline",
      number: "1098",
      description: "24/7 emergency support for children in need",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-200"
    },
    {
      name: "ASHA Crisis Center",
      number: "9801193088",
      description: "Support for survivors of gender-based violence",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-200"
    },
    {
      name: "TPO Psychosocial Counseling",
      number: "16600102005",
      description: "Professional mental health support and counseling",
      color: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-200"
    },
    {
      name: "Police",
      number: "100",
      description: "Emergency police response",
      color: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-200"
    },
    {
      name: "Meri Saathi Helpline",
      number: "1660 011 9756",
      description: "Support and guidance for women and children",
      color: "bg-orange-100",
      textColor: "text-orange-800",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0D17]">
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
        <div className="bg-[#1A1F2E] rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Emergency Helplines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helplines.map((helpline) => (
                <div
                  key={helpline.number}
                  className={`${helpline.color} rounded-lg p-6 border-2 ${helpline.borderColor} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${helpline.color} ${helpline.textColor}`}>
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${helpline.textColor}`}>
                        {helpline.name}
                      </h3>
                      <p className={`text-2xl font-bold ${helpline.textColor} mt-1`}>
                        {helpline.number}
                      </p>
                      <p className={`mt-2 text-sm ${helpline.textColor}`}>
                        {helpline.description}
                      </p>
                      <button 
                        className={`mt-4 px-4 py-2 rounded-md bg-white ${helpline.textColor} font-medium hover:bg-opacity-90 transition-colors duration-300`}
                        onClick={() => window.location.href = `tel:${helpline.number.replace(/\s/g, '')}`}
                      >
                        Call Now
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
                These helplines are available 24/7 and are staffed by trained professionals 
                ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelplines;