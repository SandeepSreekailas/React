// useMemo = remember the result of a calculation so React doesn’t recompute it unnecessarily
//           React normally does this: Re-render → run everything again 😭
//           useMemo says: Don’t re-render if the value hasn’t changed

import React,{useMemo, useState} from 'react'

function UseMemo() {
    const [count, setCount] = useState(0)
    const [text,setText]=useState("")

    const ExpensiveValue = useMemo(()=>{
        console.log("Calculating...");
        return count*2
    },[count])

    function handleClick(){
        setCount(count+1)
    }


  return (
    <div>
        <h1>Count: {ExpensiveValue}</h1>
        <button onClick={handleClick}>☝️</button>
        <input value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default UseMemo