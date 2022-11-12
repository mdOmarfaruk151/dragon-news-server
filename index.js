const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//! for get ride of api load error
app.use(cors());

//! get data from folder .json file
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get("/", (req, res) => {
  res.send("News API Running");
});

//! for send data categories
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

//! for send data news by selected category
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

//! for send all data news  
app.get('/news',(req, res)=>{
  res.send(news);
})


//! for send data news by selected id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Dragon News Server running on port `, port);
});
