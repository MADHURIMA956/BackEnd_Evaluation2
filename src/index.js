const express = require('express');

const {register,login} = require('./controllers/auth.controller');

const movies = require('./controllers/movie.controller')

const app = express();

app.use(express.json());

app.post('/register' , register);
app.post('/login' , login);

app.use('/movies' , movies)



module.exports = app
