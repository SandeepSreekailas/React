import React, { useState } from 'react'

function UpdateObjectState() {
    const [car,setCar]=useState({
        "name":"Ferrari",
        "year":2024,
        "model":'Purosangue'
    })

    function handleName(event){
        setCar(c=>({...c, name:event.target.value}))
    }
    function handleYear(event){
        setCar(c=>({...c,year:event.target.value}))
    }
    function handleModel(event){
        setCar(c=>({...c,model:event.target.value}))
    }

    
  return (
    <div>
        <p>your favorite car is : {car.name} {car.model} {car.year}</p>
        <input type="text" value={car.name} onChange={handleName}/><br /> <br />
        <input type="number" value={car.year} onChange={handleYear} /><br /><br />
        <input type="text" value={car.model} onChange={handleModel} />
    </div>
  )
}

export default UpdateObjectState