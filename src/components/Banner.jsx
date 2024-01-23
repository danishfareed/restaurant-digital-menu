import React from 'react';

function Banner({ backgroundImage, title }) {
  return (
    <>
 <div className="relative text-black text-center">
  <img
    src={backgroundImage}
    alt="Background"
    className="object-cover w-full h-64"
  />
  

  <div className="relative inset-0 flex items-center justify-center overflow px-6 -mt-12 pb-6">
    <div className="bg-white border border-gray-300 rounded-md p-4 max-w-md w-full flex items-center">
      {/* Logo on the left (25%) */}
      <div className="w-1/4 border border-gray-300 rounded-md flex items-center justify-center flex-col">
        <img
          src="https://tgifridaysme.com/wp-content/themes/tgifridays-theme/assets/images/logo-tgifridays.png"
          alt="TGI Fridays Logo"
          className="max-w-full h-auto m-4"
        />
      </div>



      {/* Main Title and Subtitle on the right (75%) */}
      <div className="w-3/4 text-left pl-8">
        <h1 className="text-2xl font-bold mb-1">TGI Fridays</h1>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default Banner;
