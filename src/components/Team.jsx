import React from 'react'

const Team = () => {

    const teamMembers = [
        { 
          name: 'John Doe', 
          role: 'Managing Partner', 
          description: 'John is the founder and managing partner of the law firm. He specializes in corporate law and has over 15 years of experience.',
          image: '/images/john_doe.jpg'
        },
        { 
          name: 'Jane Smith', 
          role: 'Senior Associate', 
          description: 'Jane is a senior associate with a focus on intellectual property law. She has helped numerous clients protect their patents and trademarks.',
          image: '/images/jane_smith.jpg'
        },
        { 
          name: 'Robert Brown', 
          role: 'Legal Counsel', 
          description: 'Robert provides expert legal counsel in family law matters. He is known for his empathetic approach in difficult cases.',
          image: '/images/robert_brown.jpg'
        },
        { 
          name: 'Emily Clark', 
          role: 'Junior Associate', 
          description: 'Emily is a junior associate who assists in various areas of law, with a focus on research and legal documentation.',
          image: '/images/emily_clark.jpg'
        },
        { 
          name: 'Michael Lee', 
          role: 'Legal Assistant', 
          description: 'Michael supports the team with case management, client communication, and administrative duties.',
          image: '/images/micheal_lee.jpg'
        },
      ];
    
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Legal Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h2>
            <p className="text-gray-600 text-md mb-4">{member.role}</p>
            <p className="text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team