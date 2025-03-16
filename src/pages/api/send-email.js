import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up your email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another service like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,  // App password (not your regular email password)
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email to receive the message
      subject: `Contact Form Message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Email sending failed:', error);
      res.status(500).json({ message: 'Failed to send message', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}