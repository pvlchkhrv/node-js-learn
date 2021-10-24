const express = require('express');
const users = require('./users-router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);

app.use((req, res) => {
  res.send(404);
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

// process.on('uncaughtException', function (err) {
//   console.log('Caught exception: ' + err);
// });
