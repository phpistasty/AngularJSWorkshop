const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./controllers/login/login-routes');

const app = express()
  .use(bodyParser.json());
const port = 8081;

app.use('/api', loginRouter());

app.listen(port, ()=> {
  console.log(`Listening on port ${8081}`);
});