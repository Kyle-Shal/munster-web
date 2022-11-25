import React from "react";
import { Link } from "react-router-dom";
import "./LoginCard.css";

function LoginCard(){
    return(
        <div className='MainBox'>
            <center> <h1 className="loginText"> Welcome to MUNster </h1></center>
            <button className="LoginButtons"> Continue with Google </button>
            <br></br>
            <button className="LoginButtons"> Continue with Facebook </button>
            <br></br>
            <button className="LoginButtons"> Continue with Apple </button>
            <br></br>
            <center><p className="loginText"> Email Address: </p></center>
            <input className="EmailInput"></input>

            <br></br>
            <br></br>
            <center><p className="loginText"> If you do not have an account: </p></center>
            <button className="SignupButton"> <Link to="/MUNster/createProfile" className="pageLink"> Sign Up </Link> </button>
            <br></br>
        </div>
    )
}

export default LoginCard;