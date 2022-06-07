const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'static')));

app.use('/', require(path.join(__dirname, 'routes/routes.js')))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost://${port}`);
});