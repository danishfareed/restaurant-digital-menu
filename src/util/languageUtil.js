// languageUtil.js
export const getSelectedLanguage = () => {
    return localStorage.getItem('selectedLanguage') || 'en';
  };
  
  export const setSelectedLanguage = (language) => {
    localStorage.setItem('selectedLanguage', language);
  };
  