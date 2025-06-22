import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  coverImage: String,
  additionalImages: [String],
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
export default Item;
