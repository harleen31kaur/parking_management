require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes'); // General routes
const userAccountRoutes = require('./routes/userAccount'); // User account routes
const parkingSpaceRoutes = require('./routes/parkingSpace'); // Parking space routes

const app = express();

// Middleware
app.use(express.json());

// Verify environment variables
if (!process.env.CONNECTION_STRING) {
    console.error('MongoDB connection string is not defined. Please set CONNECTION_STRING in the .env file.');
    process.exit(1); // Exit if connection string is missing
}

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit if connection fails
});

// Routes
app.use('/api', routes); // General routes
app.use('/api/userAccount', userAccountRoutes); // User account routes
app.use('/api/parkingSpace', parkingSpaceRoutes); // Parking space routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
