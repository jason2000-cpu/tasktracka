const express = require('express');
const cors = require('cors');
const {getUser, addUser, addTodo, getTodos, editTodo} = require('./api');


// api("John Smith")

const app = express();

const port =  process.env.PORT  || 5000;
const hostname = process.env.HOST || 'localhost';

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Welcome! This is the server to tasktracka app</h1>");
});

app.post('/getUser', async (req, res) => {
    // console.log("Request body", req.body);
    res.send( await getUser(req.body));
    // console.log(await getUser(req.body).then((resp) => {return resp.body}));
});

app.get('/getTodos/', async (req, res) => {
    const id = req.query.userId;
    console.log("Request id", id);
    res.json(await getTodos(id));

});

app.post('/addUser', async (req, res) => {
    console.log("Request body", req.body);
    res.send( await addUser(req.body));
});

app.post('/addTodo', async (req, res) => {     
    res.json( await addTodo(req.body));
    console.log(req.body);
    console.log(await addTodo(req.body).then((resp) => {return resp.body}));
});

app.post('/editTodo', async (req, res) => {
    res.send( await editTodo({
        timestamp: new Date().getTime(),
        body: "Visit Friend",
        status: "Not Complete",
    }));
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})