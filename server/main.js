const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.send('Home')
})

app.get('/calculator', (req, res) => {
    res.send('The calculator is showed here')
})

app.use((req, res) => {
    res.status(404).send("No se ha encontrado")
})

app.listen(8080, () => console.log(`Application is running on http://localhost:${8080}`))
