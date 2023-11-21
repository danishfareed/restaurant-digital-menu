import React from 'react';

function StickyTabs({ categories, activeCategory, onCategoryClick }) {
  // Deduplicate and sort categories
  const uniqueCategories = Array.from(new Set(categories)).sort();

  return (
    <div className="sticky top-0 bg-red-500 text-white p-2 flex justify-center space-x-4 z-10">
      {uniqueCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className={`focus:outline-none ${activeCategory === category ? 'underline font-bold' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default StickyTabs;
