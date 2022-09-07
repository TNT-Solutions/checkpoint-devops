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

// app.get('/', (req, res) => {
//     res.render("index.html")
// })

app.post('/delete/api/', db.delUser)
app.post('/update/api/', db.updUser)

app.get('/', db.getUsers)
app.get('/edit', db.getUsersEdit)


app.get('/users/:id', db.getUserById)
app.post('/cadastro', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/delete/:id', db.deleteUser)

app.listen(8080, ()=>{
    console.log('listening on port 8080')
})