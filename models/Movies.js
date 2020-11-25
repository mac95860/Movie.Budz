const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    comments: {
        type: String
    }
});

module.exports  = mongoose.model('Movies', MovieSchema); 