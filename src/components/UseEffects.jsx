// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1.useEffect(() => {})    // Runs after every re-render
// 2.useEffect(() => {}, []) // Runs only on mount
// 3.useEffect(() => {}, [dependency]) // Runs on mount and when dependency changes

// USES

// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react'

function UseEffects() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(()=>{
        document.title= `${count} ${color}`
    },[count,color]) // only runs when count changes

    function handleClick(){
        setCount(count+1)
    }

    function handleClickback(){
        setCount(count-1)
    }

    function changeColor(){
        setColor(c=>c==='green'?'red':'green')      
    } // here color wont effect the title unless we pass it as dependency

  return (
    <div>
        <h2 style={{color:color}}>count:{count}</h2>
        <button onClick={handleClick}>Add</button>&nbsp;
        <button onClick={handleClickback}>Sub</button><br /><br />
        <button onClick={changeColor}>Change</button>
    </div>
  )
}

export default UseEffects