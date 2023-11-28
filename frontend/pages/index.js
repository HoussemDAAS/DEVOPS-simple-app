// frontend/pages/index.js
import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/api/greet?firstName=${firstName}&lastName=${lastName}`);
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className="container mx-auto my-8 p-4 bg-white shadow-xl rounded-lg">
      <div className="text-center mb-6">
        <Image src="/welcome-photo.jpg" alt="Welcome Photo" width={800} height={400} />
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to our Website</h1>

      {greeting && <p className="text-2xl text-green-600 mb-6">{greeting}</p>}

      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <label className="mb-2 text-gray-700">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mb-4 p-2 border rounded-md"
        />

        <label className="mb-2 text-gray-700">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mb-4 p-2 border rounded-md"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Say Hello
        </button>
      </form>
    </main>
  );
};

export default Home;
