const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const { mongoose } =  require ('./database')

// Settings
app.set('port', process.env.PORT || 8080)
// Middlewares
app.use(morgan('dev'));
app.use(express.json())
// Routess

app.use(cors())

// categories route
app.use('/api/category', require('./routes/category.routes'));

// plates route
app.use('/api/plate', require('./routes/plate.routes'));

// Static files
app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));
// server init 


const corsOptions = {
    origin: true,
    credentials: true
  }
  app.options('*', cors(corsOptions)); // preflight OPTIONS; put before other routes


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})
