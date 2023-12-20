import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import Banner from '../components/Banner';
import StickyTabs from '../components/StickyTabs';
import MenuList from '../components/MenuList';
import {Helmet} from "react-helmet";
import Loader from '../components/Loader';

export const MenuPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const menuRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState('');


  const { data, isLoading, error } = useQuery(['menu', slug], () =>
    fetch(`https://tgifridaysme.com/wp-json/wp/v2/digital_menu?slug=${slug}`)
      .then(res => res.json())
      .then(data => data[0] || {}),
      {
        cacheTime: 0
      }
  );

  useEffect(() => {
    if (!isLoading && (!data || Object.keys(data).length === 0)) {
      navigate('/404'); // Redirect to the 404 page
    }
  }, [data, isLoading, navigate]);

  useEffect(() => {
    if (data?.acf?.Menus) {
      const categories = data?.acf?.Menus.map(menu => menu.dm_menu_category);

      categories.forEach(category => {
        menuRefs.current[category] = React.createRef();
      });

      const handleScroll = () => {
        let found = false;
        console.log(categories);
        for (let category of categories) {
          const ref = menuRefs.current[category];
          console.log({ref})
          if (ref.current && window.scrollY >= ref.current.offsetTop)  {
            setActiveCategory(category);
            found = true;
            break;
          }
        }
        if (!found) setActiveCategory(categories[0]);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [data]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const categoryRef = menuRefs.current[category];
    if (categoryRef && categoryRef.current) {
      const headerOffset = 60; // Height of your fixed header
      const elementPosition = categoryRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <span>An error occurred: {error.message}</span>;

  // Ensure data is defined before rendering components that depend on it
  if (!data || !data.acf?.Menus) return null;

  const categories = data.acf.Menus.map(menu => menu.dm_menu_category);
  const bannerImage = data.featured_image_url;
  const bannerTitle = data.title.rendered;

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{slug.replace(/-/g, ' ').toUpperCase()}</title>
      </Helmet>
      <Banner backgroundImage={bannerImage} title={bannerTitle} />
      
      <StickyTabs activeCategory={activeCategory} categories={categories} onCategoryClick={handleCategoryClick} />
      <div className="menu-content">
        {data.acf.Menus.map((categoryData, index) => (
          <div key={index} ref={menuRefs.current[categoryData.dm_menu_category]}>
            <MenuList category={categoryData.dm_menu_category} menuItems={categoryData.dm_menu_item} />
          </div>
        ))}
      </div>
    </div>
  );
};
