
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ''
    },

    location: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['lost', 'found'],
        required: true
    },
    imageUrl: {
    type: String,
    default: ''
    }

}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;