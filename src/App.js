import React, { useState, useRef, useEffect } from 'react';
import Banner from './components/Banner';
import StickyTabs from './components/StickyTabs';
import MenuList from './components/MenuList';
import menuItems from './data/menuItems';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuItems[0]?.category || '');
  const menuRefs = useRef({});
  const categories = Array.from(new Set(menuItems.map(item => item.category))).sort();

  useEffect(() => {
    // Initialize refs and add scroll event listener
    categories.forEach(category => {
      menuRefs.current[category] = React.createRef();
    });

    const handleScroll = () => {
      for (let category of categories) {
        const ref = menuRefs.current[category];
        if (ref.current && ref.current.getBoundingClientRect().top <= 100) {
          setActiveCategory(category);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const categoryRef = menuRefs.current[category];
    if (categoryRef && categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Banner />
      <StickyTabs activeCategory={activeCategory} onCategoryClick={handleCategoryClick} categories={categories} />
      <div className="menu-content">
        {categories.map(category => (
          <div key={category} ref={menuRefs.current[category]}>
            <MenuList menuItems={menuItems.filter(item => item.category === category)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
