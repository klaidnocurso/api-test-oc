const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const podName = process.env.HOSTNAME;
  console.log(`Request handled by pod: ${podName}`);
  res.json({ message: `Hello from pod ${podName}` });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});