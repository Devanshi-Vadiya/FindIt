
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('FindIt Backend is Running!');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully');

        app.listen(process.env.PORT, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch((error) => {
        console.log('MongoDB Connection Error:', error.message);
    });
