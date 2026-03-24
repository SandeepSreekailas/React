import React, { useState } from 'react'

function State() {
    const [count, setcount] = useState(0)

    function handleclick(){
        setcount(count+1)
    }

  return (
   
    <button onClick={handleclick}>
        clicked {count} times
    </button>
  )
}

function Buttonn({count,onClick}){
    return (
    <button onClick={onClick}>
        clicked {count} times
    </button>
  )
}

export default State
export { Buttonn }
