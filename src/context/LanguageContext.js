// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const [activeCategory, setActiveCategory] = useState('');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage === 'ar' ? 'ar' : 'en';
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = storedLanguage === 'ar' ? 'ar' : 'en';
    // Check for language parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get('l');

    if (urlLanguage && (urlLanguage === 'en' || urlLanguage === 'ar')) {
      changeLanguage(urlLanguage.toLowerCase()); // Ensure consistency (e.g., 'ar' to 'AR')
      
    } else {
      setLanguage(storedLanguage);
    }
  }, [storedLanguage]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, activeCategory, setActiveCategory}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
