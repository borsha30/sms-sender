const axios = require('axios');

/**
 * Function to send SMS using the BulkSMSBD API
 * @param {string} apiKey - Your API key
 * @param {string} senderId - Your sender ID
 * @param {string} phoneNumber - Recipient phone number
 * @param {string} message - SMS message content
 * @returns {Promise} - Promise with the API response
 */
async function sendSMS(apiKey, senderId, phoneNumber, message) {
  try {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the API URL
    const apiUrl = `http://bulksmsbd.net/api/smsapi?api_key=${apiKey}&type=text&number=${phoneNumber}&senderid=${senderId}&message=${encodedMessage}`;
    
    // Make the request
    const response = await axios.get(apiUrl);
    
    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw error;
  }
}

module.exports = { sendSMS };