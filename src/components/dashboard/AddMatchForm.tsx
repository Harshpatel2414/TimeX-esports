"use client"
import React, { useState } from 'react';

const MatchForm = () => {
    const [img, setImg] = useState<File | string>('');
    const [title, setTitle] = useState<string>('');
    const [mode, setMode] = useState<string>('');
    const [entryFee, setEntryFee] = useState<number | string>('');
    const [date, setDate] = useState<string>('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log({ img, title, mode, entryFee, date });
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-full md:w-[350px] p-5 bg-indigo-950 rounded-lg">
            <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-b-2 bg-zinc-300 text-indigo-950 border-indigo-300 outline-none"
                    placeholder="Enter Title"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Map Image</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 rounded-lg border-b-2 bg-zinc-300 text-indigo-950 border-indigo-300 outline-none"
                    placeholder="Enter Image URL"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Match Type</label>
                <select
                    name="type"
                    value={mode}
                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setMode(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-b-2 bg-zinc-300 text-indigo-950 border-indigo-300 outline-none"
                    required
                >
                    <option value="squad">Squad</option>
                    <option value="duo">Duo</option>
                    <option value="single">Single</option>
                </select>
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Entry Fee</label>
                <input
                    type="number"
                    name="entryFee"
                    value={entryFee}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEntryFee(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-b-2 bg-zinc-300 text-indigo-950 border-indigo-300 outline-none"
                    placeholder="Enter Entry Fee"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-b-2 bg-zinc-300 text-indigo-950 border-indigo-300 outline-none"
                    required
                />
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full">Create</button>
        </form>
    );
};

export default MatchForm;
