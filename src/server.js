import express from 'express';
import http from 'http';  // Required for creating HTTP server
import { Server } from 'socket.io';  // Import Socket.IO
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import namesOfAllahRoutes from './routes/namesOfAllah.js'
import surahNamesRoutes from './routes/surahNames.js'

const app = express();
//const port = 3001;
const port = process.env.PORT || 3001;

// Create HTTP server (required for Socket.IO)
const server = http.createServer(app);

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection (replace with your own MongoDB URI)
//mongoose.connect('mongodb://localhost:27017/loginApp', {
mongoose.connect('mongodb+srv://Flutter:Testing%401234@cluster0.pnbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
app.use('/api', namesOfAllahRoutes);
app.use('/api', surahNamesRoutes);

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'],
  },
  transports: ['polling', 'websocket'], // Support both WebSocket & polling
});

io.on('connection', (socket) => {
  console.log('🟢 New client connected:', socket.id);

  socket.on('message', (data) => {
    console.log('📩 Message received:', data);
    io.emit('message', data); // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected:', socket.id);
  });
});

// Start the server
app.listen(port, () => {
//  console.log(`Server running at http://localhost:${port}`);
  console.log(`Server running at http://${port}`);
});
