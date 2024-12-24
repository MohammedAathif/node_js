import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;  // Export the User model
