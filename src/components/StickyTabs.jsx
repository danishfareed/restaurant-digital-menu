import React from 'react';

function StickyTabs({ categories, activeCategory, onCategoryClick }) {
  const uniqueCategories = Array.from(new Set(categories)).sort();

  return (
    <div className="sticky top-0 bg-white text-black p-2 flex justify-center overflow-x-auto shadow-md z-10">
      <div className="flex space-x-4">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={`focus:outline-none px-3 py-1 rounded-lg transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-red-500 text-white font-bold' 
                : 'hover:bg-red-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StickyTabs;
