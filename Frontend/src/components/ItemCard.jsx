import React from 'react'

const ItemCard = ({ item, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition">
      <img src={`http://localhost:5000/${item.coverImage}`} alt={item.name} className="h-48 w-full object-cover rounded-t-xl" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{item.name}</h3>
      </div>
    </div>
  );
};

export default ItemCard;
