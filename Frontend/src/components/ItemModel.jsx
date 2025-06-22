import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ItemModal = ({ item, onClose }) => {
  const imageStyle = {
    maxHeight: '400px', 
    objectFit: 'contain',   
    width: '100%',           
    borderRadius: '0.75rem'  
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-xl max-w-2xl w-full relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold">&times;</button>
        
        {/* Item Title */}
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-4">{item.description}</p>
        
        {/* Carousel */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          emulateTouch
        >
          {[item.coverImage, ...(item.additionalImages || [])].map((img, i) => (
            <div key={i} className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
              <img
                src={`http://localhost:5000/${img}`}
                alt={`item-${i}`}
                style={imageStyle}
              />
            </div>
          ))}
        </Carousel>

        {/* Enquire Button */}
        <button
          onClick={() => alert("Thanks for your interest!")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
