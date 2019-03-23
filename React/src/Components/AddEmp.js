import React, { Component } from 'react';
import './AddCitizen.css';
import {addEmp} from '../Actions/employees-action'
import store from '../Redux'
class AddEmp extends Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        let ename=this.refs.ename.value
        let ecnic=this.refs.ecnic.value
        let ephoneno=this.refs.ephoneno.value
        let expert=this.refs.expert.value
        let employee={ename:ename, ecnic:ecnic, ephoneno:ephoneno, expert:expert}
        
        var options={
            method:'POST',
            body:JSON.stringify({employee}),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch('/addEmp',options)
        .then((res)=>res.text())
        .then((json) => {
            console.log(json)
            this.props.dispatch(addEmp(json.data))
          })
        .catch((error)=>console.log(error))
        // store.dispatch(addEmp(employee))
        // alert("Employee is Added")
    }
    render(){
        return(
            <div className="addemp">
            <h2>Add Employees</h2>
            <form action="/addEmp" method="POST">
                <input className="input" type="text" ref="ename" placeholder="Name" required="required"/><br/><br/>
                <input className="input" type="number" ref="ecnic" placeholder="CNIC" required="required"/><br/><br/>
                <input className="input" type="number" ref="ephoneno" placeholder="Phone#" required="required"/><br/>
                <h5>Expertations:</h5>
                <select ref="expert">
                    <option>Plumber</option>
                    <option>Electrician</option>
                    <option>Driver</option>
                    <option>Sweeper</option>
                </select><br/><br/>
                <input type="submit" value="Add" onClick={this.handleSubmit} />
            </form>
            </div>
        )
    }
}
export default AddEmp