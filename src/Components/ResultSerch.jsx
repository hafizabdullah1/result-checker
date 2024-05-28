import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResultSearch() {
    const navigate = useNavigate();
    const [id, setId] = useState();

    const handleCheck = () => {
        navigate(`/result/${id}`);
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 bg-[url(https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdWx0fGVufDB8fDB8fHww)] bg-cover">
            <div className="bg-white p-4 shadow-lg rounded-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Matric SSC - Part II Result 2021</h1>
                <p className="text-lg mb-2 text-center">Search By Roll No</p>
                <label htmlFor="rollNo" className="block text-sm font-semibold text-gray-700">Enter Roll No</label>
                <input
                    type="number"
                    id="rollNo"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter your Roll No"
                    className="w-full border border-gray-300 rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                    onClick={handleCheck}
                    className={`w-full bg-green-500 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                        id >= 1 ? '' : 'hidden' 
                    }`}
                >
                    Get Result
                </button>
            </div>
        </div>
    );
}

export default ResultSearch;
