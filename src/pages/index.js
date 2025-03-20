import Link from 'next/link';

export default function Home() {
  const badges = [
    { name: 'GitHub', url: 'https://github.com/ConnorMcIntire', image: '/badges/github-badge.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/connor-mcintire-911693305/', image: '/badges/linkedin-badge.png' }
  ];

  return (
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border-4 border-blue-500 p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4 text-center" style={{ fontFamily: 'Pokemon, sans-serif' }}>
          Welcome to My Projectdex!
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Profile Image */}
          <img
            src="/profile.JPG"
            alt="Connor McIntire"
            className="w-32 md:w-48 h-32 md:h-48 rounded-full border-4 border-yellow-500 shadow-lg"
          />

          {/* Info Section */}
          <div className="flex-1 mx-4 text-center md:text-left">
            <h2 className="text-2xl text-blue-700 mb-2">Connor McIntire</h2>
            <p className="text-lg text-gray-700">Computing Major</p>
            <p className="text-lg text-gray-700">Developer</p>
            <p className="text-lg text-gray-700 mt-2">
              Passionate about creating engaging digital experiences, actively seeking opportunities to grow and contribute as a developer.
            </p>
          </div>

          {/* Badges Section (Side-by-Side) */}
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <h3 className="text-xl text-red-500 mb-2">My Links</h3>
            <div className="flex space-x-4">
              {badges.map((badge) => (
                <a key={badge.name} href={badge.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-20 md:w-28 h-20 md:h-28 object-contain border-4 border-blue-500 rounded-lg shadow-lg transition-transform hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-6 items-center justify-center w-full">
  <Link href="/projectdex" className="flex w-full md:w-auto">
    <button className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 w-full md:w-auto h-12 flex items-center justify-center leading-none">
      View Projectdex
    </button>
  </Link>
  <Link href="/aboutme" className="flex w-full md:w-auto">
    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 w-full md:w-auto h-12 flex items-center justify-center leading-none">
      About Me
    </button>
  </Link>
  <Link href="/contactme" className="flex w-full md:w-auto">
    <button className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 w-full md:w-auto h-12 flex items-center justify-center leading-none">
      Contact Me
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}
