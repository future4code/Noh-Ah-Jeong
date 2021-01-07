// a. quando atribuo um número a uma variável do tipo string o VSCode acusa o erro
const minhaString: string = "dois"

// b. podemos usar o union type com: number | string
const meuNumero: number = 2

// c. usar type para limitar as propriedades
const pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "Ester",
    idade: 27,
    corFavorita: "vermelho"
}

// d.
type pessoa = { nome: string, idade: number, corFavorita: string }
const pessoaUm: pessoa = {
    nome: "João",
    idade: 18,
    corFavorita: "azul"
}
const pessoaDois: pessoa = {
    nome: "Ana",
    idade: 16,
    corFavorita: "preto"
}
const pessoaTres: pessoa = {
    nome: "Paulo",
    idade: 14,
    corFavorita: "vermelho"
}

// e.
enum corArcoIris {
    UM = "Vermelho",
    DOIS = "Laranja",
    TRES = "Amarelo",
    QUATRO = "Verde",
    CINCO = "Azul",
    SEIS = "Anil",
    SETE = "Violeta"
}
type outraPessoa = { nome: string, idade: number, corFavorita: corArcoIris }
const pessoaQuatro: outraPessoa = {
    nome: "Paulo",
    idade: 14,
    corFavorita: corArcoIris.UM
}