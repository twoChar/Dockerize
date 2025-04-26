const express = require("express");
const app = express();
const port = process.env.port || 8000;

// Root route
app.get("/", (req, res) => {
  return res.json({ message: "Hello, Docker!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});
