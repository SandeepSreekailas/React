// useCallback = remember a function so it doesn’t get recreated on every render
//               React normally does this: Re-render → run everything again 😭
//               useCallback says: Don’t re-render if the function hasn’t changed
//               useCallback returns a memoized version of the callback

// React.memo = remember a component so it doesn’t re-render unnecessarily
//              React normally does this: Parent re-render → Child also re-renders 😭
//              React.memo says: Don’t re-render the component if props haven’t changed
//              It returns a memoized version of the component (based on props)

import React,{useCallback, useState} from 'react'
import UseCallbackchild from './UseCallbackchild'

function UseCallback() {
    const [count, setCount] = useState(0)

    const handleClick=useCallback(()=>{
        console.log("clicked")
    },[])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <UseCallbackchild onclick={handleClick} />
    </div>
  )
}

export default UseCallback