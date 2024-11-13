import React, { useState } from 'react';

function GenerateComplaint() {
  const [formData, setFormData] = useState({
    filing_type: 'self',
    complainant_name: '',
    complainant_address: '',
    complainant_contact: '',
    complainant_email: '',
    victim_name: '',
    victim_address: '',
    relationship_to_victim: '',
    filing_authority: '',
    filing_authority_address: '',
    incident_details: '',
    date_of_incident: '',
    time_of_incident: '',
    location_of_incident: '',
    injuries_sustained: '',
    witness_information: '',
    evidence_description: ''
  });

  const [complaintLetter, setComplaintLetter] = useState('');
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const generateComplaintLetter = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/generate-complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        setComplaintLetter(data.complaint_letter);
      } else {
        throw new Error('Failed to generate complaint letter');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Generate Complaint</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="filing-type">
            Filing Type:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filing-type"
            name="filing_type"
            value={formData.filing_type}
            onChange={handleInputChange}
          >
            <option value="self">Self</option>
            <option value="third_party">Third Party</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="complainant-name">
            Complainant Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="complainant-name"
            type="text"
            name="complainant_name"
            value={formData.complainant_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="complainant-address">
            Complainant Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="complainant-address"
            type="text"
            name="complainant_address"
            value={formData.complainant_address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="complainant-contact">
            Complainant Contact:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="complainant-contact"
            type="text"
            name="complainant_contact"
            value={formData.complainant_contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="complainant-email">
            Complainant Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="complainant-email"
            type="email"
            name="complainant_email"
            value={formData.complainant_email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="victim-name">
            Victim Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="victim-name"
            type="text"
            name="victim_name"
            value={formData.victim_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="victim-address">
            Victim Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="victim-address"
            type="text"
            name="victim_address"
            value={formData.victim_address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="relationship-to-victim">
            Relationship to Victim:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="relationship-to-victim"
            type="text"
            name="relationship_to_victim"
            value={formData.relationship_to_victim}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="filing-authority">
            Filing Authority:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filing-authority"
            type="text"
            name="filing_authority"
            value={formData.filing_authority}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="filing-authority-address">
            Filing Authority Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filing-authority-address"
            type="text"
            name="filing_authority_address"
            value={formData.filing_authority_address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="incident-details">
            Incident Details:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incident-details"
            name="incident_details"
            value={formData.incident_details}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date-of-incident">
            Date of Incident:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date-of-incident"
            type="date"
            name="date_of_incident"
            value={formData.date_of_incident}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time-of-incident">
            Time of Incident:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time-of-incident"
            type="time"
            name="time_of_incident"
            value={formData.time_of_incident}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location-of-incident">
            Location of Incident:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location-of-incident"
            type="text"
            name="location_of_incident"
            value={formData.location_of_incident}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="injuries-sustained">
            Injuries Sustained:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="injuries-sustained"
            name="injuries_sustained"
            value={formData.injuries_sustained}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="witness-information">
            Witness Information:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="witness-information"
            name="witness_information"
            value={formData.witness_information}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="evidence-description">
            Evidence Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="evidence-description"
            name="evidence_description"
            value={formData.evidence_description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={generateComplaintLetter}
          >
            Generate Complaint Letter
          </button>
        </div>
      </form>
      {complaintLetter && (
        <div>
          <h2 className="text-xl font-bold mb-4">Complaint Letter</h2>
          <pre className="bg-gray-100 p-4 rounded shadow">{complaintLetter}</pre>
        </div>
      )}
    </div>
  );
}

export default GenerateComplaint;