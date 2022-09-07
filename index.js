const express = require('express');
const path = require('path');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const db = require('./queries')

const app = express();

const bodyParser = require('body-parser');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html')
})


app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/cadastro', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})