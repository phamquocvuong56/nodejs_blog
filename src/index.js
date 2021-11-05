const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path= require('path');
const handlebars= require('express-handlebars');
const { extname } = require('path');
const { urlencoded } = require('express');
const route= require('./routes');
//http logger
// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})