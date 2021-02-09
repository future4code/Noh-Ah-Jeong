"use strict";
var minhaString = "dois";
var meuNumero = 2;
var pessoa = {
    nome: "Ester",
    idade: 27,
    corFavorita: "vermelho"
};
var pessoaUm = {
    nome: "João",
    idade: 18,
    corFavorita: "azul"
};
var pessoaDois = {
    nome: "Ana",
    idade: 16,
    corFavorita: "preto"
};
var pessoaTres = {
    nome: "Paulo",
    idade: 14,
    corFavorita: "vermelho"
};
var corArcoIris;
(function (corArcoIris) {
    corArcoIris["UM"] = "Vermelho";
    corArcoIris["DOIS"] = "Laranja";
    corArcoIris["TRES"] = "Amarelo";
    corArcoIris["QUATRO"] = "Verde";
    corArcoIris["CINCO"] = "Azul";
    corArcoIris["SEIS"] = "Anil";
    corArcoIris["SETE"] = "Violeta";
})(corArcoIris || (corArcoIris = {}));
var pessoaQuatro = {
    nome: "Paulo",
    idade: 14,
    corFavorita: corArcoIris.UM
};
//# sourceMappingURL=exercicio1.js.map