const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path= require('path');
const handlebars= require('express-handlebars');
const { extname } = require('path');
//http logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))
//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})