const express = require('express');
const bodyParser = require('body-parser');
const { sendSMS } = require('./sms-sender');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// API credentials
const API_KEY = 'PTwAGhbgrHajjdI2gFq3';
const SENDER_ID = '8809617624575';

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route to handle SMS sending
app.post('/send-sms', async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    
    // Validate inputs
    if (!phoneNumber || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone number and message are required' 
      });
    }
    
    // Send the SMS
    const result = await sendSMS(API_KEY, SENDER_ID, phoneNumber, message);
    
    // Return result to client
    res.json({ 
      success: true, 
      message: 'SMS sent successfully', 
      result 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send SMS', 
      error: error.message 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});