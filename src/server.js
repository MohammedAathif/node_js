import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'

const app = express();
const port = "node-js-07n6.onrender.com";

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection (replace with your own MongoDB URI)
mongoose.connect('mongodb+srv://Flutter:Testing@1234@cluster0.pnbsm.mongodb.net/', {
  serverSelectionTimeoutMS: 5000,  // Timeout after 5 seconds
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Use the routes from auth.js
app.use('/api', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://${port}`);
});
