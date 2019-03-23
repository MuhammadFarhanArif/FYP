import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RHeader extends Component {

    render() {

      return (
        <div className="header">
        <h1>Residential Management System</h1>
        <h4>
        <Link to="/rhomedata">Home</Link>||
        <Link to="/addrequests">Send Request</Link>
        </h4>
        </div>

      )
  
    }
  
  }

  export default RHeader