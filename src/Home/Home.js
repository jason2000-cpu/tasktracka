import React from 'react'

import './Home.css'

import logo from '../image/logo.svg'

function Home() {
  return (
    <div className='bdy'>
        <div className='logo'>
            <h2>Task</h2>
            <img src={logo} id='icon' alt='logo'/>
            <h2>Tracka</h2>
        </div>
        <div className='main row'>
            <div className='list col col-sm-6'>
                <h2>list: Todo</h2>
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