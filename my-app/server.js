const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors()); // Use cors middleware here

app.get('/api', (req, res) => {
  axios.get('https://version.gridlabd.us/')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send({ error: error.toString() });
    });
});

app.listen(5000, () => {
  console.log('Proxy server running on port 5000');
});

