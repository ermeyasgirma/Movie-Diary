const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-movie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


const MovieDiary = require('./models/MovieDiary');

app.get('/movies', async (req, res) => {
    const movies = await MovieDiary.find();
    res.json(movies);
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
})