const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let grades = [];

app.get('/test', (req, res) => {
  console.log('Received GET request');
  res.json(grades);
});


const port = 3000;
app.listen(port, () => {
  console.log(`API REST service is running on port ${port} !!`);
});


// To get this Node.js API up and running:
//
//  First, install the dependencies listed in package.json:
//   npm install
//
// Then, start the API server with:
//   node app.js
//

// Trigger CI/CD pipeline.....
