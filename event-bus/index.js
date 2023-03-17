const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const port = 4005;

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event); // posts
  axios.post('http://localhost:4001/events', event); // comments
  axios.post('http://localhost:4002/events', event); // query
  axios.post('http://localhost:4003/events', event); // moderation

  res.send({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
