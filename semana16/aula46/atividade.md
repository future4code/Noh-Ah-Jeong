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

```

### Exercício 5
a. Query:
```

```

### Exercício 6
a. Query:
```

```

### Exercício 7
a. Query:
```

```