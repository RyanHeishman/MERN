const mongoose = require("mongoose");

const TvShowSchema = new mongoose.Schema({
    
    title: {type: String,
    required: [true, 'You must put a title'],
    minLength: [2, 'Title must be at least 2 characters']
    },
    network: {type: String,
        required: [true, 'You must put a network'],
        minLength: [2, 'Network must be at least 2 characters']
    },
    numOfSeasons: {type: Number,
        required: [true, 'You must put a number of seasons'],
        min: [0, 'Number of seasons must be at least 1']
    },
    stillOn: {type: Boolean,
        required: [true, '']
    }

}, {timestamps: true});

module.exports = mongoose.model('TvShow', TvShowSchema);