const { Todo } = require("../models/model.js");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      attributes: { exclude: ["description"] },
    });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getTodoById = async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.createTodo = async (req, res) => {
  const { id, title, description, completed } = req.body;
  try {
    const todo = await Todo.create({ id, title, description, completed });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    await todo.destroy();
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};