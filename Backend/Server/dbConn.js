const { MongoClient, ObjectId } = require('mongodb');
// const { users, todos } = require('./db')


const uri = "mongodb://127.0.0.1:27017";








const dbName = 'tasktracka';

const collectionName = 'users';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const insertUsers = async () => {
//     try {
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
//         // const todo =  await collection.findOne({body : "Visit Friend"})
//         const addusers = await collection.insertMany(users)
//         console.log(addusers);
//         return addusers
//     }
//     catch (err) {
//         console.log("Error while connecting to the database :::", err);
//     }
//     finally {
//         await client.close();
//     }
// };

const todos = [
    {
        body: "john Doe : Todo Five",
        timestamp: Date(),
        status: "Not Complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a5")
    },
    {
        body: "John Smith : Todo Five",
        timestamp: Date(),
        status: "Not Complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a6")
    },
    {
        body: "Jane Doe : Todo Five", 
        timestamp: Date(),
        status: "Not Complete",
        userId : new ObjectId("64e6475f426a9cd3005bf8a7")
    },
    {
        body: "Jane Smith : Todo Five",
        timestamp: Date(),
        status: "Not complete",
        userId: new ObjectId("64e6475f426a9cd3005bf8a8")
    }

];














// insertUsers()


const insertTodos = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('todos');
        
        const todo = await collection.insertMany(todos)
        console.log(todo)
        return todo

    } catch (err) {
        console.log("An Error Occured::", err)
    }
}

insertTodos();

// module.exports = dbConn