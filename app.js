const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const nav = [{ title: 'books', link: '/books' },
  { title: 'Authors', link: '/authors' }];
const app = express();
const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    nav: [{ title: 'books', link: '/books' },
      { title: 'Authors', link: '/authors' }],
    title: 'library',
  });
});

app.listen('3000', () => {
  debug(`listening from port ${chalk.green('3000')}`);
});
