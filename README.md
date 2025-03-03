# SMS Sender Application

A Node.js application that sends SMS messages using the BulkSMSBD API.

## Features

- Send SMS messages to any phone number
- Simple and intuitive web interface
- Character counter with SMS length tracking
- Responsive design for mobile and desktop
- Real-time status updates

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- BulkSMSBD API credentials

## Installation

1. Clone this repository:
git clone https://github.com/yourusername/sms-sender.git
2. Navigate to the project directory:
cd sms-sender
3. Install dependencies:
npm install
4. Configure your API credentials in `app.js`:
// API credentials
const API_KEY = 'PTwAGhbgrHajjdI2gFq3';
const SENDER_ID = '8809617624575';

1. Start the server:
npm start
2. Open your browser and go to http://localhost:3000
3. Enter a phone number with country code and your message text
4. Click "Send Message" to send the SMS

