import React, { Component } from 'react';
import './AddCitizen.css';
class Login extends Component{
    componentDidMount(){
        fetch('/login')
    }
    render(){
        return(
            <div className="loginform">
            <div className="header">
            <h1>Residential Management System</h1>
            </div>

            <div className="login">
            <h2>Log In Form</h2>
            <form action="/login" method="POST">
                <input className="input" type="text" ref="lusername" placeholder="Username" required="required"/><br/><br/>
                <input className="input" type="password" ref="pass" placeholder="Password" required="required"/><br/><br/>
                <input type="submit" value="Log In"/>
            </form>
            </div>


            </div>
        )
    }
}
export default Login