import React, { Component } from 'react';
import './AddCitizen.css';

class AddRequests extends Component{
    render(){
        return(
            <div className="addrequests">
             <h2>Send Request</h2>
             <form>
                <input className="input" type="text" ref="title" placeholder="Title Here..." required="required"/><br/><br/>
                <textarea className="input" rows="7" cols="70" placeholder="Type Here..."></textarea><br/><br/>
                <input type="submit" value="Send" onClick={this.handleSubmit} />
            </form>
            </div>
        )
    }
}
export default AddRequests