const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

let tasks = [];
let id = 1;

// GET ALL TASKS
router.get("/", auth, (req, res) => {
  res.json(tasks);
});

// CREATE TASK
router.post("/", auth, (req, res) => {
  const task = {
    id: id++,
    title: req.body.title,
    description: req.body.description,
    completed: false
  };

  tasks.push(task);
  res.json(task);
});

// UPDATE TASK
router.put("/:id", auth, (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Not found" });

  task.title = req.body.title ?? task.title;
  task.description = req.body.description ?? task.description;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

// DELETE TASK
router.delete("/:id", auth, (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;