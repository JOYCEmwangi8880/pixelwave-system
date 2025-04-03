require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();


app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: 'info@asilihub.net', 
        to: 'info@asilihub.net',
        subject: `inquiry from the website`,
        text: `
You've received a new inquiry from
name: ${name} 
email: ${email}
message: ${message}
`,
        replyTo: email 
      };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});