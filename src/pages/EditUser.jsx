
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const initialState ={
        clientName: '',
        caseType: '',
        lawyerName: '',
        status: '',

}

const EditUser = () => {
    const [clientDet, setClientDet] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const history = useNavigate()

    const {_id} = useParams()

    const handleChange = (e) => {
        let {name, value} = e.target

        setClientDet({...clientDet, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.patch(`https://gemsolicitors-server.onrender.com/api/cases/${_id}`, clientDet)

            if(response.status === 200){
                console.log('Client Updated');
                console.log(response.status);
                history('/')
            }
            
            setError(null)
            setLoading(false)
        } catch (err) {
            setError(`Can't update client`)
            setLoading(false)

        }
    }

    useEffect (() => {
        const fetchClientDetail = async () => {
            try {
                const res = await axios.get(`https://gemsolicitors-server.onrender.com/api/cases/${_id}`);
                setClientDet(res.data.client)
            }catch (err){
                setClientDet(false)
            }
        }
        fetchClientDetail()
    }, [_id])

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Client</h2>
        
        <div className="flex flex-col space-y-2">
          <input
            name="clientName"
            placeholder="Client Name"
            value={clientDet.clientName}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="caseType"
            placeholder="Case Type"
            value={clientDet.caseType}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="lawyerName"
            placeholder="Lawyer Name"
            value={clientDet.lawyerName}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            name="status"
            value={clientDet.status}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
          disabled={loading}
        >
          {loading ? "Updating ..." : "Update"}
        </button>
        
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
    </>
  )
}

export default EditUser