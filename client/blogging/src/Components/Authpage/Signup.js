import './Signup.css'
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './footer';
export function Signup() {


    return (
        <>
            <Header />
            <h1 id="signup">
                <form id="signupform">
                    <a href='#'><Link to='/auth'>Already a user move to login page</Link></a>
                    <label>firstname</label>
                    <input></input>
                    <label>lastname</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <label>Confirm Password</label>
                    <input></input>
                    <button className="singUpButton">Sign Up</button>
                </form>
            </h1>
            <Footer />
        </>
    )
}