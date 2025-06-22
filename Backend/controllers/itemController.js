import Item from '../models/Item.js';

export const addItem = async (req, res) => {
  try {
    const { name, type, description } = req.body;
    const coverImage = req.files['coverImage'][0].path;
    const additionalImages = req.files['additionalImages']?.map(file => file.path) || [];

    const newItem = new Item({
      name,
      type,
      description,
      coverImage,
      additionalImages,
    });

    await newItem.save();
    res.status(201).json({ message: "Item successfully added", item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add item" });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};
