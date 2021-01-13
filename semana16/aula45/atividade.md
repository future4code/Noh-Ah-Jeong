### Exercício 1
a. Na tabela 'Actor', a coluna 'salary' será deletada.

b. Na tabela 'Actor', o nome da coluna 'gender' será trocada para 'sex' que é tipada como string de 6 caracteres no máximo.

c. Na tabela 'Actor', a coluna 'gender' terá o mesmo nome mas será tipada como uma string de 255 caracteres no máximo.

d. Query:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a. Query:
```
UPDATE Actor
SET name = "Fernanda Montenegro -ATUALIZADA", birth_date = '1929-10-19'
WHERE id = "003";
```

b. Query:
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c. Query:
```
UPDATE Actor
SET name = "Banana", salary = 5, birth_date = '1929-10-19', gender = "male"
WHERE id = "005";
```

d. Query:
```
UPDATE Actor
SET name = "Banana"
WHERE id = "999";
```
Não houve erro, mas também não houve alteração de fato nos dados porque não existe um item com o id "999".

### Exercício 3
a. Query:
```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro"
```

b. Query:
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a. Query:
```
SELECT MAX(salary)
FROM Actor;
```

b. Query:
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c. Query:
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d. Query:
```
SELECT SUM(salary)
FROM Actor
```

### Exercício 5
a. A query retorna a contagem por gênero dos atores agrupados pelo gênero.

b. Query:
```
SELECT id, name
FROM Actor
WHERE gender = "male"
ORDER BY name DESC;
```

c. Query:
```
SELECT *
FROM Actor
WHERE gender = "male"
ORDER BY salary;
```

d. Query:
```
SELECT *
FROM Actor
WHERE gender = "male"
ORDER BY salary DESC
LIMIT 3;
```

e. Query:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a. Query:
```
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

b. Query:
```
ALTER TABLE Movies
CHANGE rating rating FLOAT;
```

c. Query:
```
UPDATE Movies
SET playing_limit_date = "2021-02-10"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2021-01-10"
WHERE id = "002";
```

d. Query:
```
DELETE FROM Movie
WHERE id = "003";
```

### Exercício 7
a. Query:
```
SELECT COUNT(*)
FROM Movies
WHERE rating > 7.5;
```

b. Query:
```
SELECT AVG(rating)
FROM Movies;
```

c. Query:
```
SELECT COUNT(*)
FROM Movies
WHERE playing_limit_date > CURRENT_DATE;
```

d. Query:
```
SELECT COUNT(*)
FROM Movies
WHERE release_date > CURRENT_DATE;
```

e. Query:
```
SELECT MAX(rating)
FROM Movies;
```

f. Query:
```
SELECT MIN(rating)
FROM Movies;
```

### Exercício 8
a. Query:
```
SELECT *
FROM Movies
ORDER BY name;
```

b. Query:
```
SELECT *
FROM Movies
ORDER BY name DESC
LIMIT 5;
```

c. Query:
```
SELECT *
FROM Movies
WHERE playing_limit_date > CURRENT_DATE
ORDER BY release_date DESC
LIMIT 3;
```

d. Query:
```
SELECT *
FROM Movies
ORDER BY rating DESC
LIMIT 3;
```