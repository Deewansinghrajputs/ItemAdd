import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../services/itemService';

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
  });
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData.type);
    data.append('description', formData.description);
    data.append('coverImage', coverImage);
    additionalImages.forEach((img) => data.append('additionalImages', img));

    try {
      const res = await createItem(data);
      if (res.status === 201) {
        setMessage('✅ Item successfully added!');
        setTimeout(() => {
          navigate('/view');
        }, 1000);
        setFormData({ name: '', type: '', description: '' });
        setCoverImage(null);
        setAdditionalImages([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-3 p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-xl rounded-3xl border border-blue-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">📝 Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Item Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Item Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter item name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Item Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Type</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
            <option value="Sports Gear">Sports Gear</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            required
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Additional Images */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Additional Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setAdditionalImages(Array.from(e.target.files))}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            ➕ Add Item
          </button>
        </div>

        {/* Success Message */}
        {message && (
          <p className="text-green-600 text-center font-semibold mt-2 animate-pulse">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AddItem;
