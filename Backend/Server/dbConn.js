const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";


const dbName = 'tasktracka';

const collectionName = 'todos';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConn = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const todo =  await collection.findOne({body : "Visit Friend"})
        // console.log(todo);
        return todo
    }
    catch (err) {
        console.log("Error while connecting to the database :::", err);
    }
    finally {
        await client.close();
    }
};

module.exports = dbConn