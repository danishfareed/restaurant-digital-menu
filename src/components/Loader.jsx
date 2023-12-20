import React, { useState, useEffect } from 'react';
import { funFacts } from '../data/FunFacts';

const Loader = () => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        // Pick a random fact when the component mounts
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFact(randomFact);
    }, []); // Empty dependency array to ensure this runs only once

    return (
        <div className="animate-move-stripes h-screen flex flex-col items-center justify-center">
  <div className="p-4 m-4 bg-white rounded shadow-lg">
    <p className="text-center text-xl text-gray-700">{fact}</p>
  </div>
</div>


    );
};

export default Loader;
