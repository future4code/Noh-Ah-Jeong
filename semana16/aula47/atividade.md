### Exercício 1
a. FOREIGN KEY é uma chave usada para linkar duas tabelas referenciando a chave com a PRIMARY KEY da outra tabela.

b. Query:
```
INSERT INTO Rating VALUES
('001', 'não assisti', 0, '001'),
('002', 'não assisti o filme', 0, '002'),
('003', 'não vi', 0, '003'),
('004', 'não conheço', 0, '004'),
('005', 'teria sido melhor ver o filme do Pelé', 0, '001');
```

c. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-noh-ah-jeong`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)). O erro indica que não é possível criar ou atualizar a linha filha por falha na restrição da FOREIGN KEY.

d. Query:
```
ALTER TABLE Movies
DROP COLUMN rating;
```

e. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-noh-ah-jeong`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)). O erro indica que não é possível criar ou atualizar a linha pai por falha na restrição da FOREIGN KEY.

### Exercício 2
a. A tabela terá duas colunas: 'movie_id' e 'actor_id'. As duas são FOREIGN KEY que refereciam os id das tabelas Movies e Actor respectivamente.

b. Query:
```
INSERT INTO MovieCast VALUE
('001', '001'), ('001', '002'), ('002', '003'),
('003', '005'), ('004', '004'), ('010', '007');
```

c. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-noh-ah-jeong`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)). O erro indica que não é possível criar ou atualizar a linha filha por falha na restrição da FOREIGN KEY.

d. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-noh-ah-jeong`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)). O erro indica que não é possível criar ou atualizar a linha pai por falha na restrição da FOREIGN KEY.

### Exercício 3
a. O query vai mostrar todas as coulnas das tabelas 'Movies' e 'Rating' onde a coluna 'id' da tabela 'Movies' se refere à coluna 'movie_id' da tabela 'Rating'. O operador ON funciona como uma condição.

b. Query:
```
SELECT Movies.name, Movies.id, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

### Exercício 4
a.Query:
```
SELECT Movies.name, Movies.id, Rating.rate, Rating.comment FROM Movies 
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
```

b.Query:
```
SELECT MovieCast.movie_id, Movies.name, MovieCast.actor_id FROM MovieCast
JOIN Movies ON MovieCast.movie_id = Movies.id;
```

c.Query:
```
SELECT AVG(Rating.rate), Movies.id, Movies.name FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY Movies.id;
```

### Exercício 5
a. A query irá mostrar todas as colunas das tabelas 'Movies' e 'MovieCast', relacionadas entre si pelas colunas 'id' e 'movie_id', e também da tabela 'Actor' com a sua coluna 'id' relacionada ao 'actor_id' da tabela 'MovieCast'. Dois JOIN permitem trazer informações de 3 tabelas.

b. Query:
```
SELECT MovieCast.movie_id, Movies.name, MovieCast.actor_id, Actor.name FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c. A query retorna o id e o nome dos filmes e o id e nome dos atores que possuem alguma relação na tabela 'MovieCast'.

d. Query:
```
SELECT 
	Movies.id as movie_id, 
    Movies.name, 
    Actor.id as actor_id, 
    Actor.name, 
    Rating.rate, 
    Rating.comment 
FROM Movies
LEFT JOIN Rating on Rating.movie_id = Movies.id
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

### Exercício 6
a. Relação N:M

b. Query:
```
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name TEXT NOT NULL,
    date DATE NOT NULL
);

INSERT INTO Oscar VALUES
('01', 'Óscar de melhor filme', '2000-01-01'),
('02', 'Óscar de melhor direção', '2000-01-01'),
('03', 'Óscar de melhor filme', '2001-01-01'),
('04', 'Óscar de melhor direção', '2001-01-01'),
('05', 'Óscar de melhor filme', '2002-01-01'),
('06', 'Óscar de melhor direção', '2002-01-01'),
('07', 'Óscar de melhor filme', '2003-01-01'),
('08', 'Óscar de melhor direção', '2003-01-01');

CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
	oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
```

c. Query:
```
INSERT INTO MovieOscar VALUES
('001', '01'), ('001', '02'),
('002', '03'), ('002', '04'),
('003', '05'), ('003', '06'),
('004', '07'), ('004', '08');
```

d. Query:
```
SELECT Movies.name, Oscar.name FROM MovieOscar
RIGHT JOIN Movies
ON MovieOscar.movie_id = Movies.id
JOIN Oscar
ON MovieOscar.oscar_id = Oscar.id;
```