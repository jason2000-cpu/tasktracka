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

app.get('/getUser', async (req, res) => {
    res.send( await getUser("John Smith"));
});

app.get('/getTodos', async (req, res) => {
    res.send( await getTodos());
});

app.get('/addUser', async (req, res) => {
    res.send( await addUser({name: "John Jack",email:'johnjack@gmail.com', password: "test"}));
});

app.get('/addTodo', async (req, res) => {
    res.send( await addTodo({
        timestamp: new Date(),
        body: "Order Groceries",
        status: "Not Complete",
    }));
});

app.get('/editTodo', async (req, res) => {
    res.send( await editTodo({
        timestamp: new Date().getTime(),
        body: "Visit Friend",
        status: "Not Complete",
    }));
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})