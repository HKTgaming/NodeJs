const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars')
const app = express();
const port = 5000;

// morgan
app.use(morgan('combined'));

// app.engine('handlebars', engine());
// định dạng đuôi view
app.engine('hbs',engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './resources/views');


// router
app.get('/', (req, res) => {
    return res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news')
})




app.listen(port, () => {
  console.log(`Chúc mừng bạn đã kết nối cổng ${port} thành công`);
})