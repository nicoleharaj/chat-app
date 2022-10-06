"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
var corsOptions = {
    origin: 'http://localhost:3501'
};
app.use((0, cors_1.default)(corsOptions));
// application/json requests
app.use(express_1.default.json());
// application/x-www-form-urlencoded requests
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({
    name: 'chat-session',
    secret: process.env.COOKIE_SECRET,
    httpOnly: true
}));
// Test route
app.get('/', (req, res) => {
    res.json({ message: "connected" });
});
// Declare and listen for requests on port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🐙[server]: Server is running at http://localhost:${PORT}`);
});
