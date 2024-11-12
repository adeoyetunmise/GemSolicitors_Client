import React from 'react';

const Projects = () => {
  const projectCards = [
    {
      title: 'Corporate Law Services',
      description: 'Providing expert legal advice on corporate governance, compliance, and mergers.',
    },
    {
      title: 'Intellectual Property',
      description: 'Protecting intellectual property rights and handling copyright, trademark, and patent cases.',
    },
    {
      title: 'Family Law',
      description: 'Handling divorce, child custody, and adoption cases with empathy and professionalism.',
    },
    {
      title: 'Criminal Defense',
      description: 'Defending clients in criminal cases with dedication and thorough investigation.',
    },
    {
      title: 'Real Estate Law',
      description: 'Assisting clients with property transactions, zoning, and real estate disputes.',
    },
    {
      title: 'Immigration Services',
      description: 'Helping clients navigate immigration law for visas, residency, and citizenship.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {projectCards.map((project, index) => (
        <div key={index} className="max-w-xs w-full bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <div className="h-40 w-full bg-gray-200 rounded-md mb-4">
            {/* Placeholder for the image */}
            <img
              src={`/images/project${index + 1}.jpg`}
              alt="Project"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
