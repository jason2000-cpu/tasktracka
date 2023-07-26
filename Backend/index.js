const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db.json');

const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).send(`</h1>Task Tracka API Running</h1>`)
})
app.get('/api', (req, res)=>{
    res.status(200).send(`</h1>Task Tracka API Running</h1>`)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})