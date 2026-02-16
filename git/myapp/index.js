const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'myapp' });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true });
});

app.listen(PORT, () => {
  console.log(`myapp running on port ${PORT}`);
});
