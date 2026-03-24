import React from 'react'

function LoginPage() {
  return (
    <>
    <div>Welcome To Login page</div><br />
    <form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' /><br /><br />
        <label htmlFor="pass">Password</label>
        <input type="password" name='password' id='pass' /><br /><br />
        <button type='submit'>Submit</button>
    </form>
    </>
    
  )
}

export default LoginPage