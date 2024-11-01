"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use("/", page_routes_1.default);
app.use("/todos", todo_routes_1.default);
// Start server
const PORT = Number(process.env.PORT || 5000);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
