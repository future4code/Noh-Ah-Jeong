"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenData = exports.generateToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};
exports.generateToken = generateToken;
const getTokenData = (token) => {
    const result = jwt.verify(token, process.env.JWT_KEY);
    return { id: result.id };
};
exports.getTokenData = getTokenData;
//# sourceMappingURL=authenticator.js.map