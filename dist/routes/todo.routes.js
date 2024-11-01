"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRouter = (0, express_1.Router)();
// In-memory database
let todos = [
    { id: '123', todoText: 'Wash garden', completed: false }
];
// Fetch todos
todoRouter.get('/', (req, res) => {
    res.status(200).render('todos', { todos, title: 'To Dos' });
});
// Add todo
todoRouter.post('/add', (req, res) => {
    console.log(req.body);
    const newTodo = {
        id: '456',
        todoText: req.body.todoText,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).render('thank_you', { title: 'To Do Added!' });
});
exports.default = todoRouter;
