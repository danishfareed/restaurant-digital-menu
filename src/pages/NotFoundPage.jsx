import React from 'react'

const NotFoundPage = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl mt-2">It seems like we've misplaced that recipe.</p>
        <p className="text-md mt-2">The page you're looking for isn't on the menu.</p>
        <a href="/" className="mt-4 inline-block bg-red-500 text-white px-6 py-3 rounded-md text-lg">Back to Home</a>
      </div>
    </div>
    </>
    
  )
}

export default NotFoundPage