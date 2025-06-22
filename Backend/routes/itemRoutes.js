import express from 'express';
import multer from 'multer';
import path from 'path';
import { addItem, getItems } from '../controllers/itemController.js';

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post(
  '/add',
  upload.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 10 },
  ]),
  addItem
);

router.get('/items', getItems);

export default router;
