import React from 'react'

import Image from '../image/undraw_empty_xct9.png' ;
export default function Empty() {
  return (
    <div className="empty-todo">
        <img src={ Image } alt='empty' style={{width: "50%"}} />
        <br />
        <span style={{fontFamily: 'Fira Sans', fontSize: 20, fontWeight: 'bold'}}>There are no todos yet....</span>
    </div>
  )
}
