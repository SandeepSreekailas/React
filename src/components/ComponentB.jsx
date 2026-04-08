import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { MyContext } from './ComponentA'


function ComponentB() {
    const user=useContext(MyContext)

  return (
    <div className='box'>
        <h1>Component B</h1>
        <h2>{`hola ${user}`}</h2>
        <ComponentC/>
    </div>
  )
}

export default ComponentB