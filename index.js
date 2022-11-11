const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

//! for get ride of api load error
app.use(cors());

//! get data from folder file
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('News API Running');
});

//! for send data categories
app.get('/news-categories', (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon News Server running on port `, port);
})