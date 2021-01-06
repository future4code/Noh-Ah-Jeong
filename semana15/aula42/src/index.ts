import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries } from './countries'

const app = express()

app.use(express.json())
app.use(cors())

// Endpoint 1
app.get('/countries/all', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(result)
})

// Endpoint 3
app.get('/countries/search', (req: Request, res: Response) => {
    let result = countries
    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }
    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }

    if (result !== countries && result.length !== 0) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Country not found [3]")
    }
})

// Endpoint 4
app.put('/countries/edit/:id', (req: Request, res: Response) => {
    const result = countries.find(
        country => country.id === Number(req.params.id)
    )
    
    if (result) {
        if (req.body.name) {
            const name = req.body.name
            result.name = name
        }
        if (req.body.capital) {
            const capital = req.body.capital
            result.capital = capital
        }

        res.status(200).send('Country updated')
    } else {
        res.status(404).send("Country not found [4]")
    }
    
})

// Endpoint 2
app.get('/countries/:id', (req: Request, res: Response) => {
    const result = countries.find(
        country => country.id === Number(req.params.id)
    )

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Country not found [2]")
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})