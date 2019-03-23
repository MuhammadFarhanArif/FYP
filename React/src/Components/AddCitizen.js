import React, { Component } from 'react';
import './AddCitizen.css';
import {addCitizen} from '../Actions/citizens-action' ;
import store from '../Redux'
class AddCitizen extends Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        
        let name=this.refs.name.value
        let cnic=this.refs.cnic.value
        let phoneno=this.refs.phoneno.value
        let flatno=this.refs.flatno.value
        let citizen={name:name, cnic:cnic, phoneno:phoneno, flatno:flatno}
        console.log(citizen)
        var options={
            method:'POST',
            body:JSON.stringify({citizen}),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch('/addCitizen',options)
        .then((res)=>res.text())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
        // store.dispatch(addCitizen(citizen))
        // alert('Citizen is Added');
    }
     render(){
        return(
            <div className="addcitizen">
            <h2>Add Citizen</h2>
            <form action="/addCitizen" method="POST">
                <input className="input" type="text" ref="name" placeholder="Name" required="required"/><br/><br/>
                <input className="input" type="number" ref="cnic" placeholder="CNIC" required="required"/><br/><br/>
                <input className="input" type="number" ref="phoneno" placeholder="Phone#" required="required"/><br/><br/>
                <input className="input" type="text" ref="flatno" placeholder="Flat Number" required="required"/><br/><br/>
                <input type="submit" value="Add" onClick={this.handleSubmit} />
            </form>
            </div>
        )
    }
}
export default AddCitizen