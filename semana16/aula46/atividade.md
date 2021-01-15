### Exercício 1
a. A resposta no raw vem na forma de um array de metadados.

b. Query:
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    console.log(result[0][0])
    return result[0][0]
}
```

c. Query:
```
const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) AS count FROM Actor WHERE gender = '${gender}'
    `)

    const count = result[0][0].count
    console.log(count)
    return count
}
```

### Exercício 2
a. Query:
```
const updateSalaryById = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id })
}
```

b. Query:
```
const deleteActorById = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id })
}
```

c. Query:
```
const getAverageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average_salary")
        .where({ gender })

    return result[0].average_salary
}
```

### Exercício 3
a. Endpoint:
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

b. Endpoint:
```
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string
        const count = await countActorByGender(gender)

        res.status(200).send({ quantity: count })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})
```

### Exercício 4
a. Endpoint:
```
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalaryById(
            req.body.id,
            req.body.salary
        )

        res.status(200).send({ message: "Updated" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

b. Endpoint:
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteActorById(id)

        res.status(200).send({ message: "Deleted" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

### Exercício 5
```
const createMovie = async (
    id: string,
    name: string,
    synopsis: string,
    releaseDate: Date,
    rating: number
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            synopsis: synopsis,
            release_date: releaseDate,
            rating: rating,
        })
        .into("Movies")
}

app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.name,
            req.body.synopsis,
            new Date(req.body.releaseDate),
            req.body.rating
        )

        res.status(200).send({ message: "Created" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

### Exercício 6
```
const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies LIMIT 15
    `)

    return result[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies()

        res.status(200).send({ movies })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

### Exercício 7
```
const searchMovieByNameOrSynopsis = async (query: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies WHERE name LIKE '%${query}%' OR synopsis LIKE '%${query}%' ORDER BY release_date
    `)

    return result[0]
}

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const query = req.query.query as string
        const result = await searchMovieByNameOrSynopsis(query)

        res.status(200).send({ result })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```