"use client"

import { useState } from 'react';

const TeamRegistrationForm = () => {
    const [teamLogo, setTeamLogo] = useState('');
    const [teamName, setTeamName] = useState('');
    const [leaderName, setLeaderName] = useState('');
    const [leaderEmail, setLeaderEmail] = useState('');
    const [leaderMobile, setLeaderMobile] = useState('');
    const [playerDetails, setPlayerDetails] = useState([{ name: '', email: '' }]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newPlayers = [...playerDetails];
        newPlayers[index][name] = value;
        setPlayerDetails(newPlayers);
    };

    const handleAdd = () => {
        setPlayerDetails([...playerDetails, { name: '', email: '' }]);
    };

    const handleRemove = (index) => {
        const newRegistrations = [...playerDetails];
        newRegistrations.splice(index, 1);
        setPlayerDetails(newRegistrations);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({players :playerDetails,team:{
            teamLogo,
            teamName,
            leaderName,
            leaderEmail,
            leaderMobile
        }});

        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 bg-zinc-900 p-5 text-sm">
            <p className='block mb-2 font-bold text-gray-700 '>Team Details</p>
            <div className="mb-4 rounded border p-4 text-zinc-200 border-container">
                <label htmlFor="teamLogo" className="block mb-2">
                    Team Logo
                </label>
                <input
                    type="file"
                    id="teamLogo"
                    onChange={(e) => setTeamLogo(e.target.files[0])}
                    className="p-2 mb-2 border border-container bg-none rounded w-full outline-none"
                />
                <label htmlFor="teamName" className="block mb-2">
                    Team Name
                </label>
                <input
                    type="text"
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                    required
                />
                <label htmlFor="leaderName" className="block mb-2">
                    Leader Name
                </label>
                <input
                    type="text"
                    id="leaderName"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                    required
                />
                <label htmlFor="leaderEmail" className="block mb-2">
                    Leader Email
                </label>
                <input
                    type="email"
                    id="leaderEmail"
                    value={leaderEmail}
                    onChange={(e) => setLeaderEmail(e.target.value)}
                    className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                    required
                />
                <label htmlFor="leaderMobile" className="block mb-2">
                    Leader Mobile
                </label>
                <input
                    type="tel"
                    id="leaderMobile"
                    value={leaderMobile}
                    onChange={(e) => setLeaderMobile(e.target.value)}
                    className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">Players Details</label>
                {playerDetails.map((player, index) => (
                    <div key={index} className="mb-4 border border-container rounded p-4 ">
                        <p className='pb-2 mb-2 border-b border-container '>Player {index + 1}</p>
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={player.name}
                            onChange={(e) => handleChange(index, e)}
                            className="p-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                            required
                        />
                        <label className="block mb-2 mt-4">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={player.email}
                            onChange={(e) => handleChange(index, e)}
                            className="p-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                            required
                        />
                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>
            {playerDetails.length <= 3 && <button
                type="button"
                onClick={handleAdd}
                className="btn-primary"
            >
                Add Player
            </button>}
            {playerDetails.length === 4 && <button type="submit" className="btn-primary">
                Register
            </button>}
        </form>
    );
};

export default TeamRegistrationForm;

