const express = require('express');

const {register,login} = require('./controllers/auth.controller');

const movies = require('./controllers/movie.controller')
const theater = require('./controllers/theater.controller')
const screen = require('./controllers/screen.controller')
const show = require('./controllers/show.controller')
const seat = require('./controllers/seat.controller')






const app = express();

app.use(express.json());

app.post('/register' , register);
app.post('/login' , login);

app.use('/movies' , movies)
app.use('/theaters' , theater)
app.use('/screens' , screen)
app.use('/shows' , show)
app.use('/seats' , seat)







module.exports = app
