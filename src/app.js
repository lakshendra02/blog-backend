const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://221229:tKh06ypRdPaQlLLw@blog.p95ryw4.mongodb.net/';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
