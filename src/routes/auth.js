import express from 'express';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import User from '../models/user.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user to the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Return a success message
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ message: 'Server error' });
  }
});


// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Username' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Login successful
    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    // Get all users from the database
    const users = await User.find().lean();

    // Return the list of users
    return res.status(200).json(users);
  } catch (err) {
    // If an error occurs, return a server error
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/clear-users', async (req, res) => {
  try {
    const users = await User.deleteMany();
    return res.status(200).json({ message: 'All users have been deleted' });
  } catch (err) {
    // If an error occurs, return a server error
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// List of symptoms
const symptoms = ['fever', 'cold', 'cough', 'headache', 'vomiting', 'body pain'];

// Endpoint to get symptoms list
router.get('/symptoms', (req, res) => {
  try {
    // Return the list of symptoms
    return res.status(200).json({
      status: 'success',
      data: symptoms,
      message: 'Symptoms list fetched successfully'
    });
  } catch (err) {
    // If an error occurs, return a server error
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});


// API route that fetches and merges data from two external APIs
router.get('/getAyah', async (req, res) => {
  try {
    const { sura, aya } = req.query;

    if (!sura || !aya) {
      return res.status(400).json({ message: 'Sura and Aya are required' });
    }

    // Call the first API (Tamil translation)
    const tamilApiResponse = await axios.get(`https://quranenc.com/api/v1/translation/aya/tamil_omar/${sura}/${aya}`);

    // Call the second API (English translation)
    const englishApiResponse = await axios.get(`https://quranenc.com/api/v1/translation/aya/english_hilali_khan/${sura}/${aya}`);

    // Merge both responses
    const mergedData = {
      result: {
        id: tamilApiResponse.data.result.id,
        sura: tamilApiResponse.data.result.sura,
        aya: tamilApiResponse.data.result.aya,
        arabic_text: tamilApiResponse.data.result.arabic_text,
        tamilTranslation: tamilApiResponse.data.result.translation, // Tamil translation
        englishTranslation: englishApiResponse.data.result.translation, // English translation
        footnotes: tamilApiResponse.data.result.footnotes // Assuming footnotes are same for both
      }
    };

    // Send the merged response to the frontend
    res.status(200).json({
      status: 'Success',
      data: mergedData,
      message: "ayah fetched successfully"
    });
  } catch (error) {
    // Handle errors if API calls fail
    console.error('Error fetching data from APIs:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});




export default router;  // Export the router
