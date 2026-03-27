// updater function = A function passed as an argument to setState()
//         ex. setYear(arrow funciton)
//         Allow for safe updates based on the previous state
//         Used with multiple state updates and asynchronous functions
//         Good practice to use updater functions


import React, { useState } from 'react'

function Updaterfunctions() {

    const [count,setCount]=useState(0)

    function incri(){
        // Updater function uses previous state value
        // React queues state updates and processes them in order
        // Using updater ensures correct value when multiple updates happen
        // Without the updater function, multiple setState calls may use the same old state value,so the updates may not reflect correctly
        setCount(c=>c+1) 
        setCount(c=>c+1)
    }
    function decri(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }

  return (
    <div>
        <p>COUNT:{count}</p>
        <button onClick={incri}>Incriment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decri}>Decriment</button>
    </div>
  )
}

export default Updaterfunctions