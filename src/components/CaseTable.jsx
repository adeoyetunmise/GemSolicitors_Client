import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';

const CaseTable = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get('https://gemsolicitors-server.onrender.com/api/cases');
        const sortedCase = response.data.reverse()
        setCases(sortedCase);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
    };

    fetchCases();
  }, [cases]);

  const deleteClient = async (_id) => {
    const sure = window.confirm("Are you sure you want to delete this Client?");

if (sure) {
    try{
        const res = await axios.delete(`https://gemsolicitors-server.onrender.com/api/cases/${_id}`)
    if (res.status === 200) {
        console.log("Client deleted successfully");
        setCases((prevCases) => prevCases.filter((caseItem) => caseItem._id !== _id))
        history('/')
        
    }
    }catch(err) {
        console.log(err);
        
    }
}
}

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2">Client's Name</th>
          <th className="px-4 py-2">Case Type</th>
          <th className="px-4 py-2">Lawyer's Name</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {cases.map((caseItem) => (
          <tr key={caseItem._id}>
            <td className="border px-4 py-2">{caseItem.clientName}</td>
            <td className="border px-4 py-2">{caseItem.caseType}</td>
            <td className="border px-4 py-2">{caseItem.lawyerName}</td>
            <td className="border px-4 py-2">{caseItem.status}</td>
            <td className="border px-4 py-2 flex items-center justify-center space-x-2">
              <Link
                to={`/editclient/${caseItem._id}`}
                className="bg-green-800 text-white px-2 py-1 rounded transition-all duration-200 hover:bg-green-500 mt-3"
              >
                <CiEdit className="text-white text-lg" />
              </Link>

              <button
                onClick={() => deleteClient(caseItem._id)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-3 transition-all duration-200 hover:bg-red-400"
              >
                <MdDelete className="text-white text-lg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default CaseTable;
