### Exercício 1
a.  CREATE TABLE - cria uma tabela.
    VARCHAR(n) - representa uma string, sendo 'n' o número de caracteres da string.
    DATE - representa uma data no formato YYYY-MM-DD.
    PRIMARY KEY - identeificador único de um item que possui a condição de ser não nulo e único.
    NOT NULL - uma condicional que não permite ser nulo.

b.  SHOW DATABASES - mostra a schemas.
    SHOW TABLES - mostra as tabelas criadas.
    
c.  O comando 'DESCRIBE Actor' mostra a tabela 'Actor' com as colunas: field, type, null, key, default e extra. A coluna field mostra o nome dos campos da tabela. A coluna type mostra o tipo de cada campo. A coluna null mostra a condição do campo ser nulo ou não. A coluna key indica qual campo é a key.

### Exercício 2
a. Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b. Código de Erro: 1062. Entrada duplicada para a chave primária.
O erro ocorreu porque não podem existir elementos diferentes com o mesmo key.

c. Código de Erro: 1136. O número de colunas não condiz o número de valores na linha 1.
O erro ocorreu porque tem mais valores sendo passados do que o número de colunas declarado.
Query corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);
```

d. Código de Erro: 1364. O campo 'name' não tem um valor padrão.
O erro ocorreu porque o valor do campo 'name' não foi passado.
Query corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "004",
    "Antônio da Silva Fagundes",
    400000,
    "1949-04-18",
    "male"
);
```

e. Código de Erro: 1292. Valor incorreto de data '1950' para a coluna 'birth_date' na linha 1.
O erro ocorreu porque a data não foi passada entre aspas.
Query corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "005",
    "Juliana Paes",
    719333.33,
    "1979-03-26",
    "female"
);
```

f. Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "006",
    "Rodrigo Santoro",
    380000,
    "1975-08-22",
    "male"
),
(
    "007",
    "Paolla Oliveira",
    150000,
    "1982-04-14",
    "female"
);
```

### Exercício 3
a. Query:
```
SELECT * FROM Actor
WHERE gender = "female";
```

b. Query:
```
SELECT salary FROM Actor
WHERE name = "Tony Ramos";
```

c. Não houve resultados, porque nenhuma entrada tem o seu gender como 'invalid'.

d. Query:
```
SELECT id, name, salary FROM Actor
WHERE salary <= 500000;
```

e. Código de Erro: 1054. Coluna 'nome' desconhcida na 'field list'.
O erro aconteceu porque o foi solicitado uma informação que não existe.
Query corrigido:
```
SELECT id, name from Actor
WHERE id = "002"
```

### Exercício 4
a. Mostrar todas as informações da tabela Actors das entradas que possuem o valor do 'name' começando com 'A' ou 'J' e que possuem 'salary' maior que 300000.

b. Query:
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c. Query:
```
SELECT * FROM Actor
WHERE name LIKE "G%" OR name LIKE "%g%";
```

d. Query:
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a. Cria a tabela 'Movies' com as informações id, name, synopsis, release_date e rating. O TEXT representa uma string que pode ter um comprimento de 65535 bytes no MySQL.
Query:
```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b. Query:
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
```

c. Query:
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d. Query:
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e. Query:
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
    "004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

### Exercício 6
a. Query:
```
SELECT id, name, rating FROM Movies
WHERE id = "001";
```

b. Query:
```
SELECT * FROM Movies
WHERE name = "Se Eu Fosse Você";
```

### Exercício 7