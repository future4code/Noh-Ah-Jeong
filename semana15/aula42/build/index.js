"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const countries_1 = require("./countries");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/countries/all', (req, res) => {
    const result = countries_1.countries.map(country => ({
        id: country.id,
        name: country.name
    }));
    res.status(200).send(result);
});
app.get('/countries/search', (req, res) => {
    let result = countries_1.countries;
    if (req.query.name) {
        result = result.filter(country => country.name.includes(req.query.name));
    }
    if (req.query.capital) {
        result = result.filter(country => country.capital.includes(req.query.capital));
    }
    if (req.query.continent) {
        result = result.filter(country => country.continent.includes(req.query.continent));
    }
    if (result !== countries_1.countries && result.length !== 0) {
        res.status(200).send(result);
    }
    else {
        res.status(404).send("Country not found [3]");
    }
});
app.put('/countries/edit/:id', (req, res) => {
    const result = countries_1.countries.find(country => country.id === Number(req.params.id));
    if (result) {
        if (req.body.name) {
            const name = req.body.name;
            result.name = name;
        }
        if (req.body.capital) {
            const capital = req.body.capital;
            result.capital = capital;
        }
        res.status(200).send('Country updated');
    }
    else {
        res.status(404).send("Country not found [4]");
    }
});
app.get('/countries/:id', (req, res) => {
    const result = countries_1.countries.find(country => country.id === Number(req.params.id));
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.status(404).send("Country not found [2]");
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map