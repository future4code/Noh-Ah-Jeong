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
exports.UserBusiness = void 0;
const userDatabase_1 = require("../data/userDatabase");
const authenticator_1 = require("./services/authenticator");
const hashManager_1 = require("./services/hashManager");
const idGenerator_1 = require("./services/idGenerator");
class UserBusiness {
    constructor() {
        this.signup = (input) => __awaiter(this, void 0, void 0, function* () {
            if (!input.name || !input.email || !input.password) {
                let message = '"name", "email" and "password" must be provided';
                throw new Error(message);
            }
            const id = idGenerator_1.generateId();
            const cypherPassword = yield hashManager_1.generateHash(input.password);
            const user = {
                id: id,
                name: input.name,
                email: input.email,
                password: cypherPassword
            };
            yield userDatabase_1.insertUser(user);
            const token = authenticator_1.generateToken({ id });
            return token;
        });
        this.login = (input) => __awaiter(this, void 0, void 0, function* () {
            if (!input.email || !input.password) {
                let message = '"email" and "password" must be provided';
                throw new Error(message);
            }
            const queryResult = yield userDatabase_1.selectUserByEmail(input.email);
            if (!queryResult[0]) {
                let message = "Invalid credentials";
                throw new Error(message);
            }
            const user = {
                id: queryResult[0].id,
                name: queryResult[0].name,
                email: queryResult[0].email,
                password: queryResult[0].password
            };
            const passwordIsCorrect = yield hashManager_1.compareHash(input.password, user.password);
            if (!passwordIsCorrect) {
                let message = "Invalid credentials";
                throw new Error(message);
            }
            const token = authenticator_1.generateToken({
                id: user.id
            });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=userBusiness.js.map