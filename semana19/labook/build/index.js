"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = require("./controller/routes/userRouter");
const postRouter_1 = require("./controller/routes/postRouter");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/users", userRouter_1.userRouter);
app.use("/posts", postRouter_1.postRouter);
app.listen(3003, () => {
    console.log("Server running on port 3003");
});
//# sourceMappingURL=index.js.map