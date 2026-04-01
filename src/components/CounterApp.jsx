import React,{useState,useEffect} from 'react'

function CounterApp() {
    const [count, setCount]=useState(()=>{
        return Number(localStorage.getItem("count"))|| 0
    })

    const [width, setWidth]=useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)

    // Save to localStorage (runs when count changes)
    useEffect(()=>{
        localStorage.setItem("count",count)
    },[count])

    useEffect(()=>{
        document.title=count
    },[count])

    useEffect(()=>{
        function handleresize(){
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize",handleresize)

        return ()=>{
            window.removeEventListener("resize",handleresize)

        }
    })

    function handleadd(){
        setCount(c=>c+1)
    }

    function handlesub(){
        setCount(c=>c-1)
    }


  return (
    <div>
        <h2>CounterApp</h2>
        <h3>count:{count}</h3>

        <button onClick={handleadd}>➕</button>
        <button onClick={handlesub}>➖</button>

        <h3>width:{width}</h3>
        <h3>height:{height}</h3>
        
        </div>
  )
}

export default CounterApp