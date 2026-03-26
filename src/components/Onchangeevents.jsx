// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes

import React, {use, useState} from 'react'


function Onchangeevents() {
    const [name, setName]=useState("sand")
    const [number, setNumber]=useState(0)
    const [address,setAddress]=useState("")
    const [payment, setPayment]=useState("")
    const [shipping, setDelivery]=useState("")

    function handleevenchange(event){
        setName(event.target.value)
    }

    function handlnumberchange(ev){
        setNumber(ev.target.value)    
    }

    function handleaddresschange(event){
        setAddress(event.target.value)
    }

    function handlepaymentchange(event){
        setPayment(event.target.value)
    }

    function handlecheckboxchange(event){
        setDelivery(event.target.value)
    }



  return (
    <div>
        <input value={name} onChange={handleevenchange} />
        <p>Name:{name}</p>

        <input value={number} onChange={handlnumberchange} type='number' />
        <p>Quantity: {number}</p>

        <textarea value={address} onChange={handleaddresschange} placeholder='Enter the address'></textarea>
        <p>Address: {address}</p>

        <select value={payment} onChange={handlepaymentchange}>
            <option value="">select a option</option>
            <option value="Visa">Visa</option>
            <option value="Master card">Master card</option>
            <option value="Rupay">Rupay</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type='radio' value="pickup" checked={shipping === 'pickup'} onChange={handlecheckboxchange} />
            pickup
        </label>
        <label>
            <input type='radio' value="delivery" checked={shipping === 'delivery'} onChange={handlecheckboxchange} />
            delivery
        </label>
        <p>Shipping: {shipping}</p>

    </div>
    
  )
}

export default Onchangeevents