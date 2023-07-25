import React from 'react'

// icons
import { FaEdit, FaCheck, FaTrashAlt } from "react-icons/fa";

import './Home.css'


function Home() {
    let todo = [
        {
            "id": "fjyaey-yznq-mg0z-gfagpz",
            "timestamp": "2022-6-27 23:36:42",
            "body": "Kenya One",
            "status": "Not complete"
          },
          {
            "id": "570hx1-y4hv-zas9-713geg",
            "timestamp": "2022-6-30 22:29:1",
            "body": "visit friend",
            "status": "Not complete"
          },
          {
            "id": "r64fyb-oyty-ty00-cr7zb2",
            "timestamp": "2022-7-1 9:34:40",
            "body": "Milk the cows",
            "status": "Not complete"
          },
          {
            "id": "uwh97o-v57f-z98t-57pcz3",
            "timestamp": "2022-7-1 10:1:48",
            "body": "Do the axios assignment",
            "status": "Not complete"
          },
          {
            "id": "f3eztv-kmrt-4vql-9ukka1",
            "timestamp": "2022-10-27 16:46:9",
            "body": "Learn Angular",
            "status": "Not complete"
          },
          {
            "id": "f3eztv-kmrt-4vql-9ukka1",
            "timestamp": "2022-10-27 16:46:9",
            "body": "Learn Angular",
            "status": "Not complete"
          },
          {
            "id": "f3eztv-kmrt-4vql-9ukka1",
            "timestamp": "2022-10-27 16:46:9",
            "body": "Learn Angular",
            "status": "Not complete"
          }
    ];
  return (
    <div className='bdy'>
        <div className='main row'>
            <div className='list col col-sm-6'>
                <h2>Tasks</h2>
                <div className='listBody'>
                    {todo.map((item, index) => (
                        <div className='todo' key={index}>
                            <div data-id={item.id} className='todo-content-item'>
                                <span className='todo-id'>▪️ {item.id} ▪️</span>
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
            {/* <hr /> */}
            <div className='todoFact col col-sm-6'>
                <div className='header'>
                    <div className='col headTxt'>
                      <h3>Todo : <span>Factory</span></h3>
                    </div>
                    <div className='headBtn'>
                        <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn">Create new Todo</button>
                    </div>
                </div>
                <div className='form'>
                    <div class="mb-3">
                        <label for="todoId" class="form-label">Todo Id</label>
                        <input type="email" class="form-control" id="todoId" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label for="todoBody" class="form-label">Todo Body :</label>
                        <textarea class="form-control" id="todoBody" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="todoTimestamp" class="form-label">Todo Timestamp</label>
                        <input type="email" class="form-control" id="todoTimestamp" placeholder=" " />
                    </div>
                    <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn">Create Todo</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home