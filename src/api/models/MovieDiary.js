const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MovieDiarySchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const MovieDiary = mongoose.model('MovieDiary', MovieDiarySchema);

module.exports = MovieDiary