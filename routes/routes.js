const express = require("express");
const router = express.Router();
const { getAllTodos, getTodoById, createTodo, deleteTodo } = require("../controller/controller.js");

router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;