import React,{useContext} from 'react'
import { MyContext } from './ComponentA'
// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
// import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);



function ComponentD() {
    const user=useContext(MyContext)
  return (
    <div className='box'>
        <h1>Component D</h1>
        <h2>{`bye, ${user}`}</h2>
    </div>
  )
}

export default ComponentD