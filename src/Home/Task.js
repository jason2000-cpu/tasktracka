import React from 'react';

import { FaEdit, FaCheck, FaTrashAlt } from "react-icons/fa";


function Task({ tasks }){
    return (
        tasks.map((task, index) => (
            <div className='todo' key={index}>
                <div data-id={task._id } className='todo-content-item'>
                    <span className='todo-id'>▪️{task._id }▪️</span>
                    { task.status === "Complete" ? <span style={{textDecoration: 'line-through'}} className='todo-text'>{task.body}</span> : <span className='todo-text'>{task.body}</span>}
                    <span className='todo-date'>Created at : { task.timestamp }</span>
                    <span className='todo-status incomplete'>▪️ { task.status } ▪️</span>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} className='actions-window'>
                        <FaEdit size={20} />
                        <FaTrashAlt size={20} />
                        { task.status === "Complete" ? "" : <FaCheck size={20}  /> }
                        </div>
                </div>
            </div>
        ))
    )
}


export default  Task;