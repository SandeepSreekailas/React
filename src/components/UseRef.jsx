// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes
//             When you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.

        // 1. Accessing/Interacting with DOM elements
        // 2. Handling Focus, Animations, and Transitions
        // 3. Managing Timers and Intervals

import React,{useRef,useEffect} from 'react'

function UseRef() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");   
    });

    function handleClick1(){
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor="red";
      inputRef2.current.style.backgroundColor="";
      inputRef3.current.style.backgroundColor="";

    }
    function handleClick2(){
      inputRef2.current.focus();
      inputRef2.current.style.backgroundColor="blue";
      inputRef1.current.style.backgroundColor="";
      inputRef3.current.style.backgroundColor="";
    }
    function handleClick3(){
      inputRef3.current.focus();
      inputRef3.current.style.backgroundColor="green";
      inputRef1.current.style.backgroundColor="";
      inputRef2.current.style.backgroundColor="";
    }





  return (
    <div>
        <button onClick={handleClick1}>Click Me</button>
        <input ref={inputRef1} /><br />
        <button onClick={handleClick2}>Click Me</button>
        <input ref={inputRef2} /><br />
        <button onClick={handleClick3}>Click Me</button>
        <input ref={inputRef3} /><br />
    </div>
  )
}

export default UseRef