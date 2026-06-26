const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());


app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});