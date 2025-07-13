const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from OpenShift!' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});