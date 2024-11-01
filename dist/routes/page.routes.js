"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home page
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', { title: 'Home' });
});
// About page
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', { title: 'About Us' });
});
exports.default = pageRouter;
