const express = require('express');
var cors = require('cors');
const app = express();

require('./database')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/', function (req, res) {
  setTimeout(()=> {
    res.send('Hello World from server, lol!');
  }, 3000)
});

app.listen(3020, function () {
  console.log('Example app listening on port 3020!');
});
