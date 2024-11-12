import React, {useState} from 'react'
import CaseForm from '../components/CaseForm'
import CaseTable from '../components/CaseTable'

const DashBoard = () => {
    const [cases, setCases] = useState([]);

  const addCase = (newCase) => {
    setCases([...cases, newCase]);
  };
  return (
    <>
    <div className='min-h-dvh px-6'>
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">Case Management</h1>
      <CaseForm onAddCase={addCase} />
      <br />
      <br />
      <CaseTable cases={cases} />
    </div>
     </div>
    </>
  )
  
}

export default DashBoard