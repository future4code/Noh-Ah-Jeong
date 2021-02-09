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
exports.PostBusiness = void 0;
const postDatabase_1 = require("../data/postDatabase");
const authenticator_1 = require("./services/authenticator");
const idGenerator_1 = require("./services/idGenerator");
class PostBusiness {
    constructor() {
        this.createPost = (input, token) => __awaiter(this, void 0, void 0, function* () {
            const tokenData = authenticator_1.getTokenData(token);
            const id = idGenerator_1.generateId();
            const dateNow = new Date();
            const post = {
                id: id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                createdAt: dateNow,
                authorId: tokenData.id
            };
            yield postDatabase_1.insertPost(post);
        });
        this.getPostById = (id) => __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield postDatabase_1.selectPostById(id);
            if (!queryResult[0]) {
                let message = "Post not found";
                throw new Error(message);
            }
            const post = {
                id: queryResult[0].id,
                photo: queryResult[0].photo,
                description: queryResult[0].description,
                type: queryResult[0].type,
                createdAt: queryResult[0].created_at,
                authorId: queryResult[0].author_id,
            };
            return post;
        });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=postBusiness.js.map