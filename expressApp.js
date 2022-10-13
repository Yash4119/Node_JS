const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    console.log(req.url)
    res.send("Hello People")
})

app.get('/about', (req,res) => {
    console.log(req.url)
    res.send("This is My About Page")
})

app.listen(port, () => {
    console.log(`Our Express JS app is Listening of Server ${port}`)
})