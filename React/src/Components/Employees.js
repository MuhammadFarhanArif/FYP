import React, { Component } from 'react';
import { connect } from 'react-redux'
import './AddCitizen.css';
import {setEmp} from '../Actions/employees-action'
class Employees extends Component{
    componentDidMount(){
        fetch('/getEmp')
                .then((res)=>res.text())
                .then((json) => {
                    console.log(json)
                    this.props.dispatch(setEmp(json.data))
                  })
                .catch((error)=>console.log(error))
    }
    render(){
        const {employees}=this.props
        const employeesList=employees.map((employee,index)=>{
            return <div key={index} className="listItem">
            <li>Name:{employee.ename}</li>
            <li>CNIC#:{employee.ecnic}</li>
            <li>Phone#:{employee.ephoneno}</li>
            <li>Expert:{employee.expert}</li>
            
            </div>
        })
        return(
            <div className="employees">
            <div className="output">
            <h2>Employees:</h2>
            {employeesList}
            </div>
            
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
    employees:store.employeesReducer
}
}
export default connect(mapStateToProps)(Employees)