import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/itemService';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModel';
import { Link } from 'react-router-dom';

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      const res = await fetchItems();
      setItems(res.data);
    };
    loadItems();
  }, []);

  return (
    <div className="p-6">
        <Link to="/">
      <h2 className="text-2xl font-bold mb-4">View Items</h2>
        </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ViewItems;
