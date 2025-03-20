import Link from 'next/link';

export default function AboutMe() {
  const badges = [
    { id: 1, name: 'Python', image: '/badges/python_badge.png' },
    { id: 2, name: 'CSS', image: '/badges/css_badge.png' },
    { id: 3, name: 'Javascript', image: '/badges/js_badge.png' },
    { id: 4, name: 'SQL', image: '/badges/sql_badge.png' },
    { id: 5, name: 'C#', image: '/badges/csharp_badge.png' },
    { id: 6, name: 'Flask', image: '/badges/flask_badge.png' },
    { id: 7, name: 'Pandas', image: '/badges/pandas_badge.png' },
    { id: 8, name: 'Next.js', image: '/badges/nextjs_badge.png' },
  ];

  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side: About Me Blurb */}
          <div className="md:w-1/2 p-6 bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">
              Hi, I am Connor McIntire! I have a passion for web development, gaming, and creative projects.
              I love exploring new technologies and combining my interests with a bit of nostalgia.
            </p>
            <p className="text-gray-700">
              Just like a Pokémon trainer, I have collected skills along my journey.
              Each badge represents a milestone in my learning and achievements.
            </p>
          </div>
          {/* Right Side: Gym Badges */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">My Badges</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center transition-transform hover:scale-105"
                >
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-20 h-20 object-contain border-4 border-blue-500 rounded-full shadow-md"
                  />
                  <span className="mt-2 text-sm font-medium text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Return to Home Button */}
        <div className="mt-4 flex justify-center">
          <Link href="/">
            <button className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg border-4 border-blue-500 hover:bg-yellow-400 hover:scale-105 transition-transform">
              ⬅ Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
