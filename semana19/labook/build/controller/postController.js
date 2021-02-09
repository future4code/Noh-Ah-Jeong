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
exports.PostController = void 0;
const postBusiness_1 = require("../business/postBusiness");
const postBusiness = new postBusiness_1.PostBusiness();
class PostController {
    constructor() {
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    photo: req.body.photo,
                    description: req.body.description,
                    type: req.body.type,
                };
                const token = req.headers.authorization;
                yield postBusiness.createPost(input, token);
                let message = "Success!";
                res.status(201).send({ message });
            }
            catch (error) {
                let message = error.sqlMessage || error.message;
                res.status(400).send({ message });
            }
        });
        this.getPostById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield postBusiness.getPostById(id);
                let message = "Success!";
                res.status(200).send({ message, post });
            }
            catch (error) {
                let message = error.sqlMessage || error.message;
                res.statusCode = 400;
                res.send({ message });
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=postController.js.map