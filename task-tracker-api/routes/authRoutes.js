const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

let users = [];

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  users.push({ id: users.length + 1, name, email, password });

  res.json({ message: "User registered" });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;