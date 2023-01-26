const express = require('express')

const app = express()

app.get('/home', (req, res) => {
res.sendFile("index.html", {root:__dirname});
})

app.listen(8080, () => console.log(`Application is running on http://localhost:${8080}`))