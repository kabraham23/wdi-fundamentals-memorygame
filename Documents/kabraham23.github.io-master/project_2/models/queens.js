const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const queensSchema = new Schema({
    name: { type: String, required: true },
    season: { type: String, required: true },
});

// Model from Schema
const Queen = mongoose.model('Queen', queensSchema);
 
// Export
module.exports = Queen;