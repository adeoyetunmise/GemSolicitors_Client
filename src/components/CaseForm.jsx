import React, { useState } from 'react';
import axios from 'axios';

const CaseForm = ({ onAddCase }) => {
  const initialState ={
    clientName: '',
    caseType: '',
    lawyerName: '',
    status: '',
  }

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post('https://gemsolicitors-server.onrender.com/cases', formData);
      onAddCase(response.data);
      setFormData(initialState)
    } catch (error) {
      console.error("Error creating case:", error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input name="clientName" placeholder="Client Name" value={formData.clientName} onChange={handleChange} className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-950" required />
      <input name="caseType" placeholder="Case Type" value={formData.caseType} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      <input name="lawyerName" placeholder="Lawyer Name" value={formData.lawyerName} onChange={handleChange} className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

      <select 
      name="status" 
      placeholder="Status"  
      value={formData.status} 
      onChange={handleChange} 
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required >

    <option value="">Select Status</option>
    <option value="Open">Open</option>
    <option value="In Progress">In Progress</option>
    <option value="Closed">Closed</option>
    <option value="On Hold">On Hold</option>
    </select>
      <button type="submit" className="btn py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 "
      disabled={loading}
      >{loading?"Adding ...": "Add Case"}</button>
    </form>
  );
};

export default CaseForm;
