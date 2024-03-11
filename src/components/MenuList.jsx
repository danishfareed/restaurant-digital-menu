import React, { useState, Fragment, useEffect, createContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getSelectedLanguage } from '../util/languageUtil';
import { useLanguage } from '../context/LanguageContext';

function MenuList({ category, menuItems }) {
  const { language } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //below functions will fetch content based on language
  // const get_dm_menu_item_name = (item) => {
  //   return language === 'ar' ? item.dm_menu_item_name_ar : item.dm_menu_item_name;
  // };
  const get_item = (item, itemName) => {
    return language === 'ar' ? (`${item[itemName+`_ar`]}` || item[itemName]) : item[itemName];
  };


  return (
    <div className="p-4 max-w-screen-md mx-auto" style={{ maxWidth: '600px' }}>
      <h2 className="text-2xl font-bold mb-4 text-left text-red-700 rtl:text-right" id={category}>{category}</h2>
      {menuItems.map((item, index) => (
        <div key={index} className="flex border-b last:border-none py-2" onClick={() => openModal(item)}>
      
            <img 
                src={item.dm_menu_item_image.url ? item.dm_menu_item_image.url : "https://placehold.co/200x200"} 
                alt={item.dm_menu_item_name} 
                className="w-20 h-20 mr-4 object-cover rounded-sm rtl: ml-4"
            />
            <div className="text-left rtl:text-right">
            <h3 className="text-base font-semibold">{get_item(item,"dm_menu_item_name")}</h3>
            <p className="text-sm text-gray-600">
              {item.dm_menu_item_desc?.length > 90 
                  ? `${get_item(item,'dm_menu_item_desc')?.substring(0, 90)}...`
                  : get_item(item,'dm_menu_item_desc')}
            </p>
            <p className="text-sm text-red-700">{get_item(item,'dm_menu_item_price')}</p>
          </div>

        </div>
      ))}

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl rtl:text-right">
                {selectedItem && (
                  <>
                    <img src={selectedItem.dm_menu_item_image.url} alt={selectedItem.dm_menu_item_name} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-bold leading-6">{get_item(selectedItem,'dm_menu_item_name')}</h3>
                    <p className="text-gray-700 leading-6">{get_item(selectedItem,'dm_menu_item_desc')}</p>
                    {selectedItem?.dm_menu_item_sides.length > 1 && (
                      <div className='py-2'>
                        <p className="text-black-500 text-xs font-semibold">Available sides:</p>
                        <p className="text-gray-500 text-xs font-light">{get_item(selectedItem,'dm_menu_item_sides')}</p>
                      </div>
                    )}
                    <p className="text-red-700 font-semibold">{get_item(selectedItem,'dm_menu_item_price')}</p>
                  </>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default MenuList;
