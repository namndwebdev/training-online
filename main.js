const express = require('express')
const app = express()
const port = 3000
const duongDan = require('path')

app.use('/open', express.static(duongDan.join(__dirname, 'public')))

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/home', (req, res) => {
    res.send('HOMPAGEE')
})



app.get('/login', (req, res) => {
    var duongDanAbsolute = duongDan.join(__dirname, 'index.html')
    console.log(duongDanAbsolute);
    res.sendFile(duongDanAbsolute)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
