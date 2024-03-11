import React, { useState, useEffect } from 'react';
//import { getSelectedLanguage, setSelectedLanguage } from '../util/languageUtil';
import { Listbox } from '@headlessui/react';
import { useLanguage } from '../context/LanguageContext';



function Banner({ backgroundImage, title, title_ar }) {
  const { language, changeLanguage } = useLanguage();

//const [selectedLanguage, setSelectedLanguageState] = useState(getSelectedLanguage());

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    
  };

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
        className="object-cover max-w-full h-auto m-4"
      />
      </div>



      {/* Main Title and Subtitle on the right (75%) */}
      <div className="w-3/4 text-left pl-6 rtl:text-right pr-6">
        <h1 className="text-2xl font-bold mb-1 sm:text-xl">{language === 'ar' ? 'تي جي آي فرايداي':'TGI Fridays' }</h1>
        <p className="text-lg sm:text-base">{language === 'ar' ? title_ar : title}</p>
      </div>
    </div>
  </div>
       
          
  <div className="absolute top-4 left-4">
            {/* Language Change Dropdown */}
            <Listbox value={language} onChange={handleLanguageChange}>
              <div className="relative inline-block text-left">
                <Listbox.Button className="flex items-center text-gray-700 bg-white rounded px-6 py-1 text-m sm:text-base font-medium">
                  <span className="mr-1">{language}</span>
                  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
  </svg>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg left-0">
                  <Listbox.Option
                    value="en"
                    className={({ active }) =>
                      `block px-4 py-2 text-sm ${
                        active ? 'bg-gray-300' : 'text-gray-800'
                      } hover:bg-gray-300`
                    }
                  >EN
                  </Listbox.Option>
                  <Listbox.Option
                    value="ar"
                    className={({ active }) =>
                      `block px-4 py-2 text-sm ${
                        active ? 'bg-gray-300' : 'text-gray-800'
                      } hover:bg-gray-300`
                    }
                  >AR
                  </Listbox.Option>
                  {/* Add more language options as needed */}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
  </div>

    </>
  );
}

export default Banner;
