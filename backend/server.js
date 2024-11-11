const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another SMTP provider
    auth: {
        user: 'samipgh444@gmail.com',
        pass: 'huqm gumw rqac gvro ' // or app password if using Gmail
    }
});

// API endpoint to send email
app.post('/send-report', async (req, res) => {
    const { type, description, location, anonymous, timestamp } = req.body;

    const mailOptions = {
        from: 'samipgh444@gmail.com',
        to: 'samipcodes@gmail.com, bashyalrubika@gmail.com',
        subject: `New Incident Report: ${type}`,
        text: `
      A new incident report has been submitted.
      Type: ${type}
      Description: ${description}
      Location: Latitude ${location.latitude}, Longitude ${location.longitude}
      Submitted Anonymously: ${anonymous ? 'Yes' : 'No'}
      Timestamp: ${new Date(timestamp).toLocaleString()}
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the full error
        res.status(500).json({ message: 'Failed to send email', error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
