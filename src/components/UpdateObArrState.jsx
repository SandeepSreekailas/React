import React, { use, useState } from 'react'

function UpdateObArrState() {
    const [cars, setCar] = useState([])
    const [caryear, setYear] = useState(new Date().getFullYear())
    const [carmake, setMake] = useState("")
    const [carmodel, setModel] = useState("")

    function handleaddcar() {
        const newcar = {
            "make": carmake,
            "model": carmodel,
            "year": caryear
        }
        setCar(c => [...c, newcar])

        setYear(new Date().getFullYear())
        setMake("")
        setModel('')
    }

    function removecar(index){
        setCar(cars.filter((_,i)=> i!==index))
    }

    function handleyear(event) {
        setYear(event.target.value)
    }

    function handlemake(event) {
        setMake(event.target.value)
    }

    function handlemodel(event) {
        setModel(event.target.value)
    }

    return (
        <div>
            <h2>ADD CARS</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={()=>removecar(index)}>{car.make} {car.model} {car.year}</li>)}
            </ul>
            <input type="number" value={caryear} onChange={handleyear} placeholder='enter the year' /><br /><br />
            <input type="text" value={carmake} onChange={handlemake} placeholder='enter car make' /><br /><br />
            <input type="text" value={carmodel} onChange={handlemodel} placeholder='enter car model' /><br /><br />
            <button onClick={handleaddcar}>Add Car</button>

        </div>
    )
}

export default UpdateObArrState