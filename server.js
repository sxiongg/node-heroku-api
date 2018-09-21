const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// config contains values that are read in from the .env file
// and hidden from the application, otherwise its a security risk
const config = require("./config");
const toDo = require('./routes/to-do');
const mongoose = require('mongoose');

let dev_db_url = config.production.mongoConnectionString;
let mongoConnectionString = process.env.MONGODB_URI || config.production.MONGODB_URI

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  auth: {
    user: config.production.USER,
    password: config.production.PASS
  }
});
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
  console.log(`Database connected: ${config.production.MONGODB_URI + '/' + config.production.COLLECTION}...`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/thehandiest', toDo);

var port = process.env.PORT || config.system.port

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
