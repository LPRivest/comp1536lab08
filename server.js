const myData = require('./data');
const express = require('express');
const app = express();
const { JSDOM } = require('jsdom');
const fileSystem = require('fs');
const jQuery = require('jquery');

app.use('/css', express.static('client/css'));
app.use('/js', express.static('client/js'));
app.use('/images', express.static('client/images'));
app.use('/fonts', express.static('client/fonts'));

app.get('/', function (req, res) {
  let file = fileSystem.readFileSync('client/index.html', 'utf-8');
  let dom = new JSDOM(file);
  
  res.send(dom.serialize());
});

app.get('/movies/:id', function (req, res) {
  getMovieData(res, myData.getMovieBasic(req.params.id), 'application/json');
});

app.get('/movies/:id/details', function (req, res) {
  getMovieData(res, myData.getMovieDetail(req.params.id), 'text/html');
});

app.get('/top-movies', function (req, res) {
  let format = req.query.format;
  
  if (format == 'html') {
    res.setHeader('Content-Type', 'text/html');
    res.send(myData.getTopMoviesHTML());
  } else if (format == 'json') {
    res.setHeader('Content-Type', 'application/json');
    res.send(myData.getTopMoviesHTML());
  } else {
    res.status(400).send('Wrong format!');
  }
});

app.use(function(req, res, next) {
  let file = fileSystem.readFileSync('client/index.html', 'utf-8');
  let dom = new JSDOM(file);
  let $ = jQuery(dom.window);
  
  $("#content > h1").html("404");
  $("#content > h2").html("Page not found");
  $("#features").remove();
  $("#main_content").remove();
  
  res.status(404).send(dom.serialize());
});

app.listen(80, function() {
  console.log('Server is running at port 80...');
});

function getMovieData(res, data, type) {
  if (data !== -1) {
    res.setHeader('Content-Type', type);
    res.send(data);
  } else {
    res.status(400).send('Cannot process with the given id');
  }
}