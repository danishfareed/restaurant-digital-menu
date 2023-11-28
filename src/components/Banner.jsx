import React from 'react';

function Banner({ backgroundImage, title }) {
  return (
    <div className="relative text-white text-center py-24" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1 className="text-4xl font-bold relative z-10">{title}</h1>
    </div>
  );
}

export default Banner;
