import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AppFunction = () => {
return(
  <div class="container" id="container">
    <div class="registration form">
      <form>
        <h1>Registration Form</h1>
        <input type="text"
        placeholder="Name"
        required id="Text"></input>
        <input type="email"
        placeholder="Email"
        required id="Email"></input>
        <input type="text"
        placeholder="Password"
        required id="Password"></input>
        <input type="text"
        placeholder="Confirm Password"
        required></input>
        <input type="tel"
        placeholder="Phone No."
        maxLength={11} required id="Telephone"></input>
        <button>Register</button>
      </form>
    </div>
  </div>
)
}
export default AppFunction