import React, {use, useState} from 'react'

function UpdateArrayState() {
    const [foods, setFood]=useState(["apple","banana","cherry"])

    function handleFood(){
        const Newfood=document.getElementById('abc').value
        document.getElementById('abc').value=''
        setFood(f=>[...f,Newfood])
    }

    function removeFood(index){
        setFood(foods.filter((_,i)=>i!==index))
    }


  return (
    <div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food,index)=>
                <li key={index} onClick={()=>removeFood(index)}>{food}</li>
            )}
        </ul>
        <input type="text" id='abc' placeholder='enter food name'/>
        <button onClick={handleFood}>Click</button>
    </div>
  )
}

export default UpdateArrayState