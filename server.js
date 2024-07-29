const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/formData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Schema and model
const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  phoneNumber: String,
  email: String,
  address: String,
  ssn: String,
  dob: String,
  gender: String,
  driversLicense: String,
  passportPhoto: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.post('/submit-form', upload.fields([{ name: 'driversLicense' }, { name: 'passportPhoto' }]), async (req, res) => {
  try {
    const { firstName, lastName, middleName, phoneNumber, email, address, ssn, dob, gender } = req.body;
    const driversLicense = req.files['driversLicense'] ? req.files['driversLicense'][0].path : '';
    const passportPhoto = req.files['passportPhoto'] ? req.files['passportPhoto'][0].path : '';

    const newFormData = new FormData({
      firstName, lastName, middleName, phoneNumber, email, address, ssn, dob, gender, driversLicense, passportPhoto
    });

    await newFormData.save();
    res.status(200).send('Form data submitted successfully.');
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).send('Error submitting form data.');
  }
});

app.get('/form-data', async (req, res) => {
  try {
    const formData = await FormData.find();
    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).send('Error fetching form data.');
  }
});

app.delete('/form-data/:id', async (req, res) => {
  try {
    await FormData.findByIdAndDelete(req.params.id);
    res.status(200).send('Form data deleted successfully.');
  } catch (error) {
    console.error('Error deleting form data:', error);
    res.status(500).send('Error deleting form data.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
