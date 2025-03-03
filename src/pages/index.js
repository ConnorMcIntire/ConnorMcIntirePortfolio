import { useState, useEffect } from 'react';

export default function Home() {
  const [currentBadge, setCurrentBadge] = useState(0);

  const badges = [
    { name: 'GitHub', url: 'https://github.com/ConnorMcIntire', image: '/badges/github-badge.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/connor-mcintire-911693305/', image: '/badges/linkedin-badge.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border-4 border-blue-500 p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4" style={{ fontFamily: 'Pokemon, sans-serif' }}>
          Welcome to My Projectdex!
        </h1>
        <div className="flex items-start justify-between">
          <img
            src="/profile.JPG"
            alt="Connor McIntire"
            className="w-48 h-48 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <div className="flex-1 mx-4">
            <h2 className="text-2xl text-blue-700 mb-2">Connor McIntire</h2>
            <p className="text-lg text-gray-700 mb-2">Computing Major</p>
            <p className="text-lg text-gray-700 mb-2">Developer</p>
            <p className="text-lg text-gray-700 mb-4">Passionate about creating engaging digital experiences, actively seeking opportunities to grow and contribute as a developer.</p>
          </div>
          <div className="flex flex-col items-center min-w-[150px]">
            <h3 className="text-xl text-red-500 mb-2">My Badges(Click to Visit)</h3>
            <a href={badges[currentBadge].url} target="_blank" rel="noopener noreferrer">
              <img
                src={badges[currentBadge].image}
                alt={badges[currentBadge].name}
                className="w-40 h-40 object-contain border-4 border-blue-500 rounded-lg shadow-lg"
              />
            </a>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
            View Projectdex
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
