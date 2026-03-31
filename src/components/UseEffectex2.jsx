import React,{useEffect, useState} from 'react'

function UseEffectex2() {
  const [height,setHeight]=useState(window.innerHeight)
  const [width,setWidth]=useState(window.innerWidth)

  // window.addEventListener('resize', handleResize)
  // console.log("Event added"); // if useeffect is added here then it will run only once on mount and not on resize

  useEffect(()=>{
    window.addEventListener('resize',handleResize)
    console.log("Event Added");

    return ()=>{ window.removeEventListener('resize',handleResize)
    console.log("Event Removed");}
    
  },[])

  useEffect(()=>{
    document.title=`${width} X ${height}`
  },[width,height])
  

  function handleResize(){
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }


  return (
    <div>
      <h3>Window width:{width}</h3>
      <h3>Window height:{height}</h3>
    </div>
  )
}

export default UseEffectex2