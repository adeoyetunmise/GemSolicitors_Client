import React from 'react'

const Documents = () => {
    const documents = [
        {
          title: 'Contract Agreement',
          description: 'A contract agreement between the client and the law firm outlining the terms and conditions.',
          file: '/documents/contract_agreement.pdf',
        },
        {
          title: 'Non-Disclosure Agreement (NDA)',
          description: 'A legal contract to ensure confidentiality between parties involved.',
          file: '/documents/nda.docx',
        },
        {
          title: 'Power of Attorney',
          description: 'A document that grants a designated individual authority to act on behalf of another in legal matters.',
          file: '/documents/power_of_attorney.pdf',
        },
        {
          title: 'Retainer Agreement',
          description: 'An agreement that outlines the terms of services provided by the law firm to the client.',
          file: '/documents/retainer_agreement.pdf',
        },
        {
          title: 'Terms of Service',
          description: 'This document sets the terms for using the law firm’s website or legal services.',
          file: '/documents/terms_of_service.pdf',
        },
      ];
  return (
    <div className="p-8 bg-gray-50">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Legal Documents</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {documents.map((doc, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{doc.title}</h2>
          <p className="text-gray-600 text-md mb-4">{doc.description}</p>
          <a 
            href={doc.file} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Download
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Documents