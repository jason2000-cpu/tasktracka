import React, { useEffect, useState } from 'react'

// icons
import { FaEdit, FaCheck, FaTrashAlt } from "react-icons/fa";

import './Home.css'


function Home() {


    // let [todos, setTodo] = useState();
    let [item, setItem] = useState([]);
    // let [formData, setFormData] = useState([])
    const url = 'http://localhost:5000'

 useEffect( () => {
  async function fetchData() {
    const response = await fetch(`${url}/getTodos`)
    try {
      const response =  await fetch(`${url}/getTodos`);
      const json = await response.json();
      console.log(json);
      setItem(json);
    } catch (err) {
      alert("An Error occured while fetching todos ::::", response)
    }
  }
  fetchData()
 }, [url])



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
  const createRandomId = () => {
    let id = Math.random().toString(36).substr(2, 4);
    return id;
  };
  const createTodo = () => {
    let todoId = document.getElementById("todoId").value;
    let todoBody = document.getElementById("todoBody").value;
    let todoTimestamp = document.getElementById("todoTimestamp").value;
    let todoStatus = "Not complete";
    let todo = {
      id: todoId,
      timestamp: todoTimestamp,
      body: todoBody,
      status: todoStatus,
    };
    // setFormData(todo)
    
    alert(`Success!! ${todo.body} is created at ${todo.timestamp}`)
    return todo;
  };

 const fillIdAndTimestamp = () => {
      document.getElementById("todoId").value = createRandomId();
      document.getElementById("todoTimestamp").value = createTimeStamp();
 };
  return (
    <div className='body'>
        <div className='main row'>
            <div className='list col col-sm-6'>
                <h2>Tasks</h2>
                <div className='listBody'>
                    {item.map((item, index) => (
                        <div className='todo' key={index}>
                            <div data-id={item.id} className='todo-content-item'>
                                <span className='todo-id'>▪️{item._id}▪️</span>
                                {item.status === "Complete" ? <span style={{textDecoration: 'line-through'}} className='todo-text'>{item.body}</span> : <span className='todo-text'>{item.body}</span>}
                                <span className='todo-date'>Created at : {item.timestamp}</span>
                                <span className='todo-status incomplete'>▪️ {item.status} ▪️</span>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} className='actions-window'>
                                    <FaEdit size={20} />
                                    <FaTrashAlt size={20} />
                                    {item.status === "Complete" ? "" : <FaCheck size={20}  /> }
                                    </div>
                            </div>
                        </div>
                    ))}
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
                <div className='form'>
                    <div class="mb-3">
                        <label for="todoId" class="form-label">Todo Id</label>
                        <input type="text" class="form-control" id="todoId" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label for="todoBody" class="form-label">Todo Body :</label>
                        <textarea class="form-control" id="todoBody" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="todoTimestamp" class="form-label">Todo Timestamp</label>
                        <input type="email" class="form-control" id="todoTimestamp" placeholder=" " />
                    </div>
                    <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn" onClick={createTodo}>Create Todo</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home