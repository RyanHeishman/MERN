const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

const AuthorSchema = new mongoose.Schema({
    
    name: {type: String,
    required: [true, 'You must add a name'],
    minLength: [3, 'Name must be at least 3 characters']
    }
    
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);