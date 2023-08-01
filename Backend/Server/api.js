const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";


const dbName = 'TaskTracka';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



const getUser = async (formData) => {
    const collectionName = 'users';
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const user = await collection.findOne({name: formData.name, password: formData.password})
        if (user) {
            // console.log(user);
            return user;
        }else {
            console.log("User not found");
            return null;
        }
    }
    catch (err) {
        console.log("Error while connecting to the database :::", err);
    }
    finally {
        await client.close();
    }
};

const addUser = async (FormData) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');

        const document = {
            name: FormData.name,
            email: FormData.email,
            password: FormData.password
        }

        const result = await collection.insertOne(document);
        if (result.acknowledged) {
            // console.log(`User ${FormData.name} added successfully`);
            return `User ${FormData.name} added successfully`;
        } else {
            console.log("Error While adding user");
            return false;
        }

        
    } catch (error) {
        console.log("Error while connecting to the database :::", error);
    }
    finally {
        await client.close();
    }
}

const addTodo = async (FormData) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('todos');
        const todoToAdd = {
            timestamp: FormData.timestamp,
            body: FormData.body,
            status: FormData.status,
        }

        const result= await collection.insertOne(todoToAdd);

        if (result.acknowledged) {
            console.log(`Todo with id ${result.insertedId} added successfully.`);
            return result.insertedId;
        } else {
            console.log("Todo not added");
            return false;
        }
    } catch (error) {
        console.log("Error while connecting to the database :::", error);
    } finally {
        await client.close();
    }
};

const getTodos = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('todos');
        const todos = await collection.find({}).toArray();
        // console.log(todos);
        return todos;
    } catch (err) {
        console.log("Error while connecting to the database :::", err);
        return err
    } finally {
        await client.close()
    }
};

const editTodo = async (FormData) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('todos');
        const todoToEdit = {
            timestamp: FormData.timestamp,
            body: FormData.body,
            status: FormData.status,
        }

        const result= await collection.updateOne(todoToEdit);

        if (result.insertedCount === 1) {
            console.log("Todo added successfully");
            return true;
        } else {
            console.log("Todo not added");
            return false;
        }
    } catch (error) {
        console.log("Error while connecting to the database :::", error);
    } finally {
        await client.close();
    }
};

// getUser("test", "test");

module.exports = {getUser, addUser, addTodo, getTodos, editTodo};
