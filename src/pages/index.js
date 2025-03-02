export default function Home() {
    return (
      <div className="min-h-screen bg-blue-500 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-yellow-400">Connor McIntire</h1>
        <h2 className="text-2xl mt-4">Computing Major</h2>
        <img
          src="/profile.jpg"
          alt="Connor McIntire"
          className="mt-6 w-48 h-48 rounded-full border-4 border-yellow-400"
        />
        <a
          href="/projectdex"
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Enter the Projectdex
        </a>
      </div>
    );
  }
  
  // Place your image in the public folder as 'profile.jpg' to display it! Let me know if you want me to tweak anything! 🚀