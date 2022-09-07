const express = require('express');
const path = require('path');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const users = require('./queries/users')

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
    res.render('index.html', { name: 'Teste'} )
})

app.post('/calculate', (req, res) => {
    const { name, age, email, occupation, phone} = req.body || {};
    res.send(`Post req: ${name}, ${age}, ,${email} ,${occupation} ,${phone}`)
})


app.post('/api/users', users.create)
app.get('/api/users', users.retrieve)
app.get('/api/users/:id', users.retrieve)
app.put('/api/users/:id', users.update)
app.delete('/api/users/:id', users.remove)




app.listen(3000, ()=>{
    console.log('listening on port 3000')
})