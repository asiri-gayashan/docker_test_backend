const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Define endpoint to fetch posts
app.get("/posts", async (req, res) => {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=1"
    );
    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});