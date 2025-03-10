import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Rock Paper Scissors ',
    image: '/rock_paper_scissors.png',
    description: 'A python app that allows user to play rock, paper, scissors.',
    techStack: ['Python'],
    github: 'https://github.com/ConnorMcIntire/rock-paper-scissors',
    demo: '#'
  },
  {
    id: 2,
    name: 'Butcher Shop Order Form',
    image: '/projects/butcher-shop.png',
    description: 'A digitized order form for a butcher shop with Google Sheets integration.',
    techStack: ['JavaScript', 'Google Sheets API'],
    github: 'https://github.com/yourusername/butcher-shop-form',
    demo: '#'
  }
];

export default function Projectdex() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-red-500 p-6">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6" style={{ fontFamily: 'Pokemon, sans-serif' }}>
        Projectdex
      </h1>
      
      {selectedProject ? (
        <div className="bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-500">
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Back to Projectdex
          </button>
          <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
          <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-64 object-contain mb-4" />
          <p className="mb-4">{selectedProject.description}</p>
          <h3 className="text-xl font-bold mb-2">Tech Stack:</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedProject.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href={selectedProject.github} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              GitHub Repo
            </a>
            <a href={selectedProject.demo} target="_blank" className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Live Demo
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.name} className="w-full h-40 object-contain mb-4" />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
