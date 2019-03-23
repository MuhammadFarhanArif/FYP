import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {

      return (
        <div className="header">
        <h1>Residential Management System</h1>
        <h4>
          
        <Link to="/home">Home </Link>||
        <Link to="/addcitizen"> Add Citizen </Link>||
        <Link to="/citizens"> View Citizens </Link>||
        <Link to="/addemp"> Add Employee </Link>||
        <Link to="/employees"> View employees </Link>||
        <Link to="/addannouncements"> Add Announcements </Link>

        
        </h4>
        </div>

      )
  
    }
  
  }

  export default Header