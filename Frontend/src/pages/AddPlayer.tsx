import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlayer: React.FC = () => {
  const [name, setName] = useState('');
  const [sportsName, setSportsName] = useState('');
  const [points, setPoints] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const player = {
      name,
      sports_name: sportsName,
      points: points !== '' ? points : null,
      description,
      position,
      team,
    };

    try {
      const response = await fetch('http://localhost:3000/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Player added:', data);
        navigate('/'); 
      } else {
        console.error('Error adding player:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Add Player</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Sports Name:</label>
        <input
          type="text"
          value={sportsName}
          onChange={(e) => setSportsName(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Points:</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Team:</label>
        <input
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Add Player
      </button>
    </form>
  );
};

export default AddPlayer;
