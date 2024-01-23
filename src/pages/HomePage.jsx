import React from 'react'

export const HomePage = () => {
  return (
    <>
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
      <img
        src="https://tgifridaysme.com/wp-content/themes/tgifridays-theme/assets/images/logo-tgifridays.png"
        alt="TGI Fridays Logo"
        className="max-w-full h-auto mb-4"
      />

      <a
        href="https://www.tgifridays.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mb-4 block"
      >
        Visit TGI Fridays Website
      </a>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
    </>
  )
}
