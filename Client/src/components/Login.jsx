import React from 'react'

const Login = () => {

    
  return (
    <div className="add-form">
      <label htmlFor="email"></label>email<br />s
        <input type="email" id='email'/><br />

        <label htmlFor="password"></label>password<br />
        <input type="password"  id="password" required/><br />

        <input className="submit" type="submit" value="login" onClick={()=>{}}/>

    </div>
  )
}

export default Login
