"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
/**
    * Connect to the database
    */
mongoose_1.default.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
/**
    * Middleware
    */
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${req.originalUrl} not found`);
    next();
});
// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Error: ${err}`);
    next();
});
/**
    * Register the routes
    */
index_1.default(app);
exports.default = app;
//# sourceMappingURL=app.js.map