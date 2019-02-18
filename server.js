const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/kll', (req, res) => res.send('hahah!'))
app.get('/check', (req, res) => res.send('right'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
