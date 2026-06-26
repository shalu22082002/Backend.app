const multer  = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Uplods', // Destination folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], // Restrict file types
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional resizing
  },
});

const upload = multer({ storage: storage })

module.exports=upload


