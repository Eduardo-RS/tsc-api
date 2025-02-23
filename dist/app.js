"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev')); // Read HTTP Methods
app.use((0, cors_1.default)());
app.get('/home', (req, res) => {
    res.send('Hello world using express and typescript');
});
exports.default = app;
