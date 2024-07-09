import React, { useEffect, useState } from 'react';

interface Player {
  id: number;
  name: string;
  sports_name: string;
  points: number;
  description: string;
  position: string;
  team: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:3000/players');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Top Players</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <li key={player.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              {player.name} - {player.team} - {player.position}
            </h3>
            <p className="text-gray-600">Sports: {player.sports_name}</p>
            <p className="text-gray-600">Points: {player.points}</p>
            <p className="text-gray-600">Description: {player.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
