import React from 'react'
import { useState ,  useEffect } from 'react'
const Register = () => {

    const RegisterForm = async () =>{
      let firstname = document.getElementById('firstname').value
      let lastname = document.getElementById('lastname').value
      let email = document.getElementById('email').value
      let dob = document.getElementById('dob').value
      let password = document.getElementById('password').value

      document.getElementById('firstname').value = ""
      document.getElementById('lastname').value = ""
      document.getElementById('email').value = ""
      document.getElementById('dob').value = ""
      document.getElementById('password').value = ""
  
      const user = {
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "dob":dob,
        "password":password
      }
  
  
  
      await fetch('http://localhost:5000/register' ,
      {
     method:'POST',
     headers: {
       "Content-Type": "application/json",
     },
     body:JSON.stringify(user)
   })
  
    }

  return (
    <div className="add-form" >

        <label htmlFor="FirstName"></label>FirstName<br />
        <input type="text" id='firstname' required/><br />

        <label htmlFor="LastName"></label>LastName<br />
        <input type="text" id='lastname'/><br />

        <label htmlFor="email"></label>email<br />s
        <input type="email" id='email'/><br />

        <label htmlFor="dob"></label>date of birth<br />
        <input type="date" id='dob'/><br />

        <label htmlFor="password"></label>password<br />
        <input type="password"  id="password" required/><br />

        <input className="submit" type="submit" value="Register" onClick={()=>{RegisterForm()}}/>

    
    </div>
  )
}

export default Register
