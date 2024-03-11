import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function StickyTabs({ categories, onCategoryClick }) {
  //const uniqueCategories = Array.from(new Set(categories));
  const { language, activeCategory } = useLanguage();
 console.log('active ctegory',activeCategory )
  return (
    <div className="sticky top-0 bg-white text-black p-2 flex justify-center overflow-x-auto shadow-md z-10">
      <div className="flex px-2 w-full items-start">
        {categories.map((category) => (
          <button
          key={category.dm_menu_category}
          onClick={() => onCategoryClick(category.dm_menu_category)}
          className={`whitespace-nowrap focus:outline-none px-3 py-1 rounded-lg transition-all duration-300 ${
            activeCategory === category.dm_menu_category
              ? 'bg-red-500 text-white font-bold'
              : 'hover:bg-red-100'
          }`}
        >
          {language === 'ar' ? (category.dm_menu_category_ar || category.dm_menu_category) : category.dm_menu_category}
        </button>
        ))}
      </div>
    </div>
  );
}

export default StickyTabs;
