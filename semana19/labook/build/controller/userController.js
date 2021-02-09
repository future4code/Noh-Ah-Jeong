"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userBusiness_1 = require("../business/userBusiness");
const userBusiness = new userBusiness_1.UserBusiness();
class UserController {
    constructor() {
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                };
                const token = yield userBusiness.signup(input);
                let message = "Success!";
                res.status(201).send({ message, token });
            }
            catch (error) {
                let message = error.sqlMessage || error.message;
                res.status(400).send({ message });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    email: req.body.email,
                    password: req.body.password
                };
                const token = yield userBusiness.login(input);
                let message = "Success!";
                res.status(200).send({ message, token });
            }
            catch (error) {
                let message = error.sqlMessage || error.message;
                res.status(400).send({ message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map