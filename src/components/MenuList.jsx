import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

function MenuList({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      {menuItems.map((item, index) => (
        <div key={index} className="flex border-b last:border-none py-2" onClick={() => openModal(item)}>
          <img src={item.image} alt={item.name} className="w-20 h-20 mr-4 object-cover" />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-red-600">{item.price}</p>
          </div>
        </div>
      ))}

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* The modal content */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{selectedItem.name}</h3>
              <p className="text-gray-700">{selectedItem.description}</p>
              <p className="text-lg text-red-600">{selectedItem.price}</p>
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Close</button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default MenuList;
