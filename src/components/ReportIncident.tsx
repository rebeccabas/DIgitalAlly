import React from 'react';
import { FileText, Camera, Mic, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../components/firebaseConfig';

const LocationMarker = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation({
        latitude: e.latlng.lat,
        longitude: e.latlng.lng
      });
    },
  });

  return null;
};

export default function ReportIncident() {
  const navigate = useNavigate();

  const handleGenerateComplaint = () => {
    navigate('/generate-complaint');
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
  
    const type = document.getElementById('type')?.value || 'N/A';
    const description = document.getElementById('description')?.value || '';
    const anonymous = document.getElementById('anonymous')?.checked || false;
  
    if (!location) {
      alert("Please select a location on the map.");
      return;
    }
  
    const incidentData = {
      type,
      description,
      location,
      anonymous,
      timestamp: new Date(),
    };
  
    try {
      const docRef = await addDoc(collection(firestore, 'incidents1'), incidentData);
      console.log('Document written with ID: ', docRef.id);
      alert('Incident reported successfully');
      
      // Optionally clear form fields or reset state here, without redirection
      document.getElementById('type').value = ''; // Resetting example
      document.getElementById('description').value = '';
      document.getElementById('anonymous').checked = false;
  
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting report');
    }
  };
  
  return (
    <section id="report" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Report an Incident
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your voice matters. Report incidents safely and securely.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Incident Type
              </label>
              <select
                id="type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
              >
                <option>Harassment</option>
                <option>Discrimination</option>
                <option>Violence</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Describe what happened..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Camera className="h-5 w-5 mr-2" />
                Add Photo
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Mic className="h-5 w-5 mr-2" />
                Voice Note
              </button>
            </div>

            <div className="flex items-center">
              <input
                id="anonymous"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                Submit anonymously
              </label>
            </div>

            <button
              type="submit"
              onClick={handleReportSubmit}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Shield className="h-5 w-5 mr-2" />
              Submit Report Securely
            </button>

            {/* New Button for Generating Complaint Letter */}
            <button
              type="button"
              onClick={handleGenerateComplaint}
              className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FileText className="h-5 w-5 mr-2" />
              Generate Complaint Letter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
