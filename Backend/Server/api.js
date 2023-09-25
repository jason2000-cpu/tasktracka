const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";


const dbName = 'tasktracka';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



const getUser = async (formData) => {
    const collectionName = 'users';
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const user = await collection.findOne({email: formData.email, password: formData.password})
        if (user) {
            // console.log(user);
            const res = {status: "Success", body: user._id}
            return res;
        }else {
            console.log("User not found");
            const res = {status: "User not found", body: user}
            return res
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

        const searchifUserExists = await collection.findOne({email: FormData.email});
        if (searchifUserExists) {
            return {status: "Error", body: `A user with this email already exists`}
        }

        const document = {
            name: FormData.name,
            email: FormData.email,
            password: FormData.password
        }

        const result = await collection.insertOne(document);
        if (result.acknowledged) {
            // console.log(`User ${FormData.name} added successfully`);
            const resp = {status: "Success", body: result.insertedId}
            return resp;
        } else {
            console.log("Error While adding user");
            const resp = {status: "Error", body: `Error While adding user`}
            return resp;
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
            userId: FormData.userId
        }

        const result= await collection.insertOne(todoToAdd);

        if (result.acknowledged) {
            console.log(`Todo with id ${result.insertedId} added successfully.`);
            const resp = {status: "Success", body: `Todo with id ${result.insertedId} added successfully.`}
            return resp;
        } else {
            console.log("Todo not added");
            const resp = {status: "Error", body: `Todo not added`}
            return resp;
        }
    } catch (error) {
        console.log("Error while connecting to the database :::", error);
    } finally {
        await client.close();
    }
};

const getTodos = async (id) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('todos');
        // const todos = await collection.find(id:_ObjectId(id)).toArray();
        const todos = await collection.find({userId: new ObjectId(id)}).toArray();
        console.log(todos);
        console.log(id)
        if (todos) {
            const resp = {status: "Success", body: todos}
            return resp
        }
        return {status: "Error", body: {}};
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
            const resp = {status: "Success", body: `Todo with id ${result.insertedId} edited successfully.`}
            return resp;
        } else {
            console.log("Todo not added");
            const resp = {status: "Error", body: `And error occured while editing the todo`}
            return resp;
        }
    } catch (error) {
        console.log("Error while connecting to the database :::", error);
    } finally {
        await client.close();
    }
};

// getUser("test", "test");

module.exports = {getUser, addUser, addTodo, getTodos, editTodo};
