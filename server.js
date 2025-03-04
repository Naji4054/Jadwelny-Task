const express = require("express");
const data = require("./data");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Backend for jadwelny task!" });
});

// Bio Route
app.get("/about", (req, res) => {
  res.json({
    Name: "Muhammed Naji",
    Role: "Developer",
    Location: "United Arab Emirates",
  });
});

// Fetch Local Data
app.get("/data", (req, res) => {
  res.json(data);
});

// External API Route 
app.get("/external-data", async (req, res) => {
    const url = "http://localhost:4000/external-data";  
  
    try {
      const response = await axios.get(url);
      res.json(response.data); 
    } catch (error) {
      res.status(500).json({ error: "Error fetching external data!" }); 
    }
  });



// Error Handling Middleware 
app.use((err, req, res, next) => {
  console.error("Error:", err.message); 
  res.status(500).json({ error: "Error handling request" }); 
});

// server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
