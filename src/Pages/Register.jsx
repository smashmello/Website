import React from 'react';
import './Register.css';


function Register() {
    return (
        <div className="container" id="container">
            <div className="registration-form">
                <form>
                    <h1>Registration Form</h1>
                    <input type="text" placeholder="Name" required id="Text" />
                    <input type="email" placeholder="Email" required id="Email" />
                    <input type="password" placeholder="Password" required id="Password" />
                    <input type="password" placeholder="Confirm Password" required />
                    <input type="tel" placeholder="Phone No." maxLength={11} required id="Telephone" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
