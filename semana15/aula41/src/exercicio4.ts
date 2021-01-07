type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// a. Executar o comando 'tsc exercicio4.ts' no terminal.
// b. Entrar na pasta com o comando 'cd src' e executar o comando 'tsc exercicio4.ts' no terminal.
// c. O comando 'tsc' tranpila todos os arquivos .ts
// d. O arquivo tsconfig.json gerado possui muito mais configurações. A config "lib" lista as bibliotecas a serem compiladas e "jsx" configura o código jsx gerado (jsx que é do Front End).