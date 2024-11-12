import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const LegalResourcesPage = () => {
  const [currentPage, setCurrentPage] = useState(25);

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

        {/* PDF Viewer Container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            {/* PDF Viewer */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Adjust height to fit screen */}
              <div className="h-[80vh]">
                <iframe
                  src={`/src/assets/constitution.pdf#page=${currentPage}`}
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
