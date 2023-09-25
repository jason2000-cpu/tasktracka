const { ObjectId } = require("mongodb")

 const users = [
    {
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: "12345"
    },

    {
        name: "John Smith",
        email: "johnsmith@gmail.com",
        password: "12345"
    },
    {
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        password:"12345"
    },
    {
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        password: "12345"
    }
]



 
 

 const todos = [
    {
        body: "john Doe : todo one",
        timestamp: Date.now(),
        status: "Not Complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a5")
    },
    {
        body: "John Smith : todo one",
        timestamp: Date.now(),
        status: "Not Complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a6")
    },
    {
        body: "Jane Doe : Todo One", 
        timestamp: Date.now(),
        status: "Not Complete",
        userId : new ObjectId("64e6475f426a9cd3005bf8a7")
    },
    {
        body: "Jane Smith : Todo One",
        timestamp: Date.now(),
        status: "Not complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a8")
    }

];

export default todos;