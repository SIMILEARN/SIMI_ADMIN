let express = require('express')
let app = express()
let exphbs = require('express-handlebars')
let path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helpers = require('handlebars-helpers')();
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: {
    ...helpers,
    toJSON: (object) => {
      return JSON.stringify(object);
    },
    ifEquals: (arg1, arg2, options) => {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    },
    formatCurrency: (value) => {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
  }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', '.hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use('/', require('./routes/route')); //esto es lo nuevo y ya cierto ?

app.listen(3000, () => {
  console.log("sever start in localhost:3000")
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;