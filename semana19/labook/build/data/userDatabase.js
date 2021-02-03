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
exports.selectUserByEmail = exports.insertUser = void 0;
const connection_1 = require("./connection");
const usersTableName = "labook_users";
const insertUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.raw(`
        INSERT INTO ${usersTableName} (id, name, email, password)
        VALUES ("${user.id}", "${user.name}", "${user.email}", "${user.password}";
    `);
});
exports.insertUser = insertUser;
const selectUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
        SELECT * FROM ${usersTableName}
        WHERE email = "${email}";
    `);
    return result;
});
exports.selectUserByEmail = selectUserByEmail;
//# sourceMappingURL=userDatabase.js.map