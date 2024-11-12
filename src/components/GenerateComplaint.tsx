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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const generateComplaintLetter = async () => {
    try {
      // Generate complaint letter
      const letterResponse = await fetch('http://127.0.0.1:8000/api/generate-complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (letterResponse.ok) {
        const data = await letterResponse.json();
        setComplaintLetter(data.complaint_letter);
  
        // Save incident data
        const incidentResponse = await fetch('http://127.0.0.1:8000/api/incidents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            category: formData.filing_type,
            severity: 3, // Default severity
            status: 'pending'
          })
        });
  
        if (!incidentResponse.ok) {
          throw new Error('Failed to save incident data');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const generateComplaintLetter = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/api/generate-complaint', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setComplaintLetter(data.complaint_letter);
  //     } else {
  //       throw new Error('Failed to generate complaint letter');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="text-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg text-white">
          <h1 className="text-2xl font-bold">Generate Complaint</h1>
          <p className="text-sm">"Fill in the details to generate your complaint letter"</p>
        </div>
        <form className="space-y-4 p-4">
          {[
            { label: "Filing Type", name: "filing_type", type: "select", options: ["Self", "Third Party"] },
            { label: "Complainant Name", name: "complainant_name", type: "text" },
            { label: "Complainant Address", name: "complainant_address", type: "text" },
            { label: "Complainant Contact", name: "complainant_contact", type: "text" },
            { label: "Complainant Email", name: "complainant_email", type: "email" },
            { label: "Victim Name", name: "victim_name", type: "text" },
            { label: "Victim Address", name: "victim_address", type: "text" },
            { label: "Relationship to Victim", name: "relationship_to_victim", type: "text" },
            { label: "Filing Authority", name: "filing_authority", type: "text" },
            { label: "Filing Authority Address", name: "filing_authority_address", type: "text" },
            { label: "Incident Details", name: "incident_details", type: "textarea" },
            { label: "Date of Incident", name: "date_of_incident", type: "date" },
            { label: "Time of Incident", name: "time_of_incident", type: "time" },
            { label: "Location of Incident", name: "location_of_incident", type: "text" },
            { label: "Injuries Sustained", name: "injuries_sustained", type: "textarea" },
            { label: "Witness Information", name: "witness_information", type: "textarea" },
            { label: "Evidence Description", name: "evidence_description", type: "textarea" }
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2" htmlFor={field.name}>
                {field.label}:
              </label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {field.options?.map((option, i) => (
                    <option key={i} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={generateComplaintLetter}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-80 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Generate Complaint Letter
            </button>
          </div>
        </form>
        {complaintLetter && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Complaint Letter</h2>
            <pre className="whitespace-pre-wrap">{complaintLetter}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateComplaint;
