import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalResourcesPage = () => {
  const [currentPage, setCurrentPage] = useState(2);

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

        {/* PDF Viewer Container */}
        <div className="bg-[#1A1F2E] rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Legal Resources</h2>
            
            {/* PDF Viewer */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="h-[600px]">
                <iframe
                  src="/src/assets/constitution.pdf#page=25"
                  className="w-full h-full"
                  title="Legal Resources PDF"
                />
              </div>
              
              {/* PDF Controls */}
              <div className="bg-gray-100 p-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 disabled:bg-gray-400"
                    disabled={currentPage <= 1}
                  >
                    Previous Page
                  </button>
                  <span className="text-sm text-gray-600">
                    Page {currentPage}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalResourcesPage;