import React, { useState} from 'react'

function Formevents() {
    const [data, setData] = useState({"name":"","password":""})
    const [submittedData, setSubmittedData] = useState(null)

    function handledata(event){
        const {name,value}=event.target
        setData({...data,[name]:value})
        
    }
    function handlesubmit(event){
        event.preventDefault()
        setSubmittedData(data)
    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' onChange={handledata}/><br /><br />
            <label htmlFor="pass">Password</label>
            <input type="password" name='password' id='pass' onChange={handledata}/><br /><br />
            <button type='submit' >Submit</button>
        </form>
        {submittedData && (
            <div>
                <h2>Submitted Data</h2>
                <p>Name: {submittedData.name}</p>
                <p>Password: {submittedData.password}</p>
            </div>
        )}
    </div>
  )
}

export default Formevents