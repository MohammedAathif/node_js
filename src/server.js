//import express from 'express';
//import http from 'http';  // Required for creating HTTP server
//import { Server } from 'socket.io';  // Import Socket.IO
//import bodyParser from 'body-parser';
//import cors from 'cors';
//import mongoose from 'mongoose';
//import authRoutes from './routes/auth.js'
//import namesOfAllahRoutes from './routes/namesOfAllah.js'
//import surahNamesRoutes from './routes/surahNames.js'
//
//const app = express();
////const port = 3001;
//const port = process.env.PORT || 3001;
//
//// Create HTTP server (required for Socket.IO)
//const server = http.createServer(app);
//
//// Enable CORS for all origins
//app.use(cors());
//
//// Middleware to parse JSON request bodies
//app.use(bodyParser.json());
//
//// MongoDB connection (replace with your own MongoDB URI)
////mongoose.connect('mongodb://localhost:27017/loginApp', {
//mongoose.connect('mongodb+srv://Flutter:Testing%401234@cluster0.pnbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//  serverSelectionTimeoutMS: 5000,  // Timeout after 5 seconds
//})
//.then(() => {
//  console.log('Connected to MongoDB');
//})
//.catch((err) => {
//  console.error('Error connecting to MongoDB:', err);
//});
//
//// Use the routes from auth.js
//app.use('/api', authRoutes);
//app.use('/api', namesOfAllahRoutes);
//app.use('/api', surahNamesRoutes);
//
//// Setup Socket.IO
//const io = new Server(server, {
//  cors: {
//    origin: '*', // Allow all origins
//    methods: ['GET', 'POST'],
//  },
//  transports: ['polling', 'websocket'], // Support both WebSocket & polling
//});
//
//io.on('connection', (socket) => {
//  console.log('🟢 New client connected:', socket.id);
//
//  socket.on('message', (data) => {
//    console.log('📩 Message received:', data);
//    io.emit('message', data); // Broadcast message to all clients
//  });
//
//  socket.on('disconnect', () => {
//    console.log('🔴 Client disconnected:', socket.id);
//  });
//});
//
//// Start the server
//app.listen(port, () => {
////  console.log(`Server running at http://localhost:${port}`);
//  console.log(`Server running at http://${port}`);
//});


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

const port = process.env.PORT || 3001;

app.get('/ping', (req, res) => res.send('pong'));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins (for development)
    },
});
let messages = [];
let users = {};

//
io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    // Handle user joining
    socket.on("join", (user) => {
        users[user] = socket.id;
        console.log(`👤 ${user} joined with socket ID: ${socket.id}`);
    });

    // Send chat history on connection
    socket.emit("allChats", messages);

    // Handle private messaging
    socket.on("privateChat", ({ sender, recipient, message }) => {
        console.log(`📩 Private message from ${sender} to ${recipient}: ${message}`);

        const recipientSocketId = users[recipient];

        if (recipientSocketId) {
            io.to(recipientSocketId).emit("newChat", { sender, recipient, message });
        } else {
            console.log(`❌ Recipient ${recipient} not found.`);
        }

        messages.push({ sender, recipient, message });
    });


    socket.on("typing", () => {
        console.log('typing triggered');
        socket.emit('typing');
    })

    socket.on('stopTyping', () => {
        console.log('stopTyping triggered');
        socket.emit('stopTyping');
    })

    // Handle user disconnection
    socket.on("disconnect", () => {
        for (let user in users) {
            if (users[user] === socket.id) {
                console.log(`❌ User ${user} disconnected`);
                delete users[user];
                break;
            }
        }
    });
});

//server.listen(4000, "0.0.0.0", () => {
//  console.log("✅ Server running on http://0.0.0.0:4000");
//  console.log("✅ Server running on http://0.0.0.0:4000");
//});

app.listen(port, () => {
//  console.log(`Server running at http://localhost:${port}`);
  console.log(`Server running at http://${port}`);
});



//server.listen(3050, "0.0.0.0", () => {
//  console.log("Server running on port 3050");
//});




//server.listen(3000, () => {
//    console.log("🚀 Server running on h ttp://192.168.2.224:3000");
//});



//server.listen(3000, "0.0.0.0", () => {
//    console.log("Server is running on http://192.168.2.224:3000");
//});

//server.listen(3000, "0.0.0.0", () => {
//    console.log("🚀 Server running on http://0.0.0.0:3000");
//});



