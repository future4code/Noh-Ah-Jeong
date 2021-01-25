# Exercício 1
a. Acho que strings são mais adequadas para representar ids, pois strings incluem até os números.

# Exercício 2
a. O código começa guardando uma variável com a string que se refere ao nome da tabela a ser criada. Em seguida é definida a conexão com o banco de dado através do knex. Por fim há uma query builder que cria um usuário com campos id, name e password, na tabela mencionada anteriormente.

b. Query:
```
CREATE TABLE aula50_users(
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);
```

# Exercício 3
a. O código 'as string' assegura que a variável em questão (process.env.JWT_KEY) é uma string, garantindo que ela não é undefined.

# Exercício 7
a. 'as any' diz que a variável em questão (payload) pode assumir tanto objeto como undefined.