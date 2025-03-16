import Link from 'next/link';
import { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-red-500 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'Pokemon, sans-serif' }}>
          Contact Me
        </h1>
        <Link href="/">
          <button className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg border-4 border-blue-500 hover:bg-yellow-400 hover:scale-105 transition-transform">
            ⬅ Return to Home
          </button>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-500 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-yellow-500 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-yellow-500 rounded-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-3 border-2 border-yellow-500 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg border-4 border-blue-500 hover:bg-yellow-400 hover:scale-105 transition-transform"
            disabled={isSubmitting}
          >
            {isSubmitting ? '🚀 Sending...' : '🚀 Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}