import './login.css';
import { Header } from './Header';
import { Footer } from './footer';
import { useState, useRef } from 'react'

export function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');


    const handleEmailUpdation = (e) => {
        setEmail(e.target.value);
        console.log("EMAIL VALUE", email)
    }

    const handlePasswordUpdation = (e) => {
        setPassword(e.target.value)
        console.log("PASSWORD VALUE", password)
    }


    return (
        <>
            <Header />
            <h1 id="login">
                <form id="loginform">
                    <label>Email</label>
                    <input onChange={handleEmailUpdation}></input>
                    <label>Password</label>
                    <input onChange={handlePasswordUpdation}></input>
                    <button className="loginButton">Log in</button>
                    <a className="singUpnlink">Not a User Move to Signup</a>
                </form>
            </h1>
            <Footer />
        </>
    )
}