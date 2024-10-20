import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="container" id="container">
            <div className="login-form">
                <form>
                    <h1>Login Form</h1>
                    <input type="email" placeholder="Email" required id="Email" />
                    <input type="password" placeholder="Password" required />
                    <button id="login-button">Login</button>
                    <button id="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
