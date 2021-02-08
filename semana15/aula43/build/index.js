"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usersList_1 = require("./usersList");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/allUsers', (req, res) => {
    let errorCode = 400;
    try {
        res.status(200).send(usersList_1.users);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.get('/user', (req, res) => {
    let errorCode = 400;
    try {
        const type = req.query.type;
        if (!type) {
            errorCode = 422;
            throw new Error("Tipo inválido!");
        }
        const matchedUsers = usersList_1.users.filter(user => user.type.toLowerCase() === type.toLowerCase());
        if (matchedUsers.length === 0) {
            errorCode = 404;
            throw new Error("Nenhum usuário do tipo encontrado!");
        }
        res.status(200).send(matchedUsers);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.get('/user/:name', (req, res) => {
    let errorCode = 400;
    try {
        const name = req.params.name;
        const matchedUser = usersList_1.users.find(user => user.name.toLowerCase() === name.toLowerCase());
        if (!matchedUser) {
            errorCode = 404;
            throw new Error("Nenhum usuário encontrado!");
        }
        res.status(200).send(matchedUser);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.put('/user', (req, res) => {
    let errorCode = 400;
    try {
        const requestBody = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        };
        if (!requestBody.name || !requestBody.email || !requestBody.type || !requestBody.age) {
            errorCode = 422;
            throw new Error("Faltou algum campo!");
        }
        usersList_1.users.push(requestBody);
        res.status(200).send("Usuário adicionado!");
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.put('/changeLastUser', (req, res) => {
    let errorCode = 400;
    try {
        const requestBody = {
            name: req.body.name
        };
        const lastUserIndex = usersList_1.users.length - 1;
        usersList_1.users[lastUserIndex].name = `${requestBody.name}-ALTERADO`;
        res.status(200).send(`Usuário alterado!`);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.patch('/patchLastUser', (req, res) => {
    let errorCode = 400;
    try {
        const requestBody = {
            name: req.body.name
        };
        const lastUserIndex = usersList_1.users.length - 1;
        usersList_1.users[lastUserIndex].name = `${requestBody.name}-REALTERADO`;
        res.status(200).send(`Usuário realterado!`);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.patch('/deleteLastUser', (req, res) => {
    let errorCode = 400;
    try {
        const lastUserIndex = usersList_1.users.length - 1;
        usersList_1.users.splice(lastUserIndex);
        res.status(200).send(`Usuário deletado!`);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map