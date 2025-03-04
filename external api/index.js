const express = require('express');
const app = express();
const PORT = 4000;

// Example route that returns dummy data
app.get('/external-data', (req, res) => {
  res.json({ message: "This is data from the external API" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`External API running at http://localhost:${PORT}`);
});
