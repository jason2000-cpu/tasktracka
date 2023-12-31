import React, { useState, useEffect } from 'react'

import Task from './Task';
import Empty from './Empty'
// icons
// import { FaEdit, FaCheck, FaTrashAlt } from "react-icons/fa";

import './Home.css'
// import { Form } from 'react-router-dom'



function Home({ userId }) {
    let [tasks, setTasks] = useState([]);
    let [formData, setFormData] = useState({
      id: "",
      body: "",
      timestamp: "",
      status: "Not Complete",
      userId:  userId
    });
    const url = 'http://localhost:5000';

    useEffect( () => {
      async function fetchTasks() {
        try {
          const response =  await fetch(`${url}/getTodos?userId=${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
          const json = await response.json();
          // console.log(json);
          if (json.status === "Success") {
            console.log("This are the todos::::",json.body);
            setTasks(json.body);
          }
        } catch (err) {
          alert("An Error occured while fetching todos")
        }
      }
      fetchTasks()
    });

// console.log(item)

// create timestamp
 const createTimeStamp = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day  = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let timeStamp = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  return timeStamp;
}

// create random id
const createRandomId = () => {
let id = Math.random().toString(36).substr(2, 4);
return id;
};


// fill id and timestamp
const fillIdAndTimestamp = () => {
document.getElementById("todoId").value = createRandomId();
document.getElementById("todoTimestamp").value = createTimeStamp();
setFormData({ ...formData, id: createRandomId(), timestamp: createTimeStamp() });

};

// handle input change event

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  // console.log(name, value)
  // formData.set(name, value);
  // console.log(formData)
};

//handle form submit 

const handleSubmit =  async (event) => {
  event.preventDefault();
  console.log(formData);
  const requestOptions ={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }

  const response =  await fetch(`${url}/addTodo`, requestOptions);
  const json = await response.json();
  console.log(json.body);
  return json.body;
};

  return (
    <div className='body'>
        <div className='main row'>
            <div className='list col col-sm-6'>
                <h2>Tasks</h2>
                <div className='listBody'>
                    <p>User ID : { userId ? userId : userId}</p>
                    { tasks.length > 0 ? <Task tasks={tasks} /> :  <Empty /> }
                </div>
            </div>
            <div className='todoFact col col-sm-6'>
                <div className='header'>
                    <div className='col headTxt'>
                      <h3>Todo : <span>Factory</span></h3>
                    </div>
                    <div className='headBtn'>
                        <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn" onClick={fillIdAndTimestamp}>Create new Todo</button>
                    </div>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="todoId" class="form-label">Todo Id</label>
                        <input type="text" class="form-control" id="todoId" placeholder="" name='todoId' required  />
                    </div>
                    <div class="mb-3">
                        <label for="todoBody" class="form-label">Todo Body :</label>
                        <textarea class="form-control" id="todoBody" rows="3" required name='body' onChange={handleChange}></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="todoTimestamp" class="form-label">Todo Timestamp</label>
                        <input type="text" class="form-control" id="todoTimestamp" placeholder=" " name='timeStamp' required/>
                    </div>
                    <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn">Create Todo</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Home