import React, { Component } from 'react';
import { connect } from 'react-redux'
import './AddCitizen.css';
import { setCitizen } from '../Actions/citizens-action'
class Citizens extends Component{
    componentDidMount(){
        fetch('/getCitizen')
                .then((res)=>res.text())
                .then((data)=>{
                    console.log(data)
                    // document.getElementById('demo1').innerText=data
                    })
                // .then((json) => {
                //     console.log(json)
                //     this.props.dispatch(setCitizen(json.data))
                //   })
                .catch((error)=>console.log(error))
    }
    render(){
        const {citizens}=this.props
        const citizensList=citizens.map((citizen,index)=>{
            return <div key={index} className="listItem">
            <li><b>Name:</b> {citizen.name}</li>
            <li><b>CNIC:</b> {citizen.cnic}</li>
            <li><b>Phone#:</b> {citizen.phoneno}</li>
            <li><b>Flat#:</b> {citizen.flatno}</li>
            </div>
        })
        return(
            <div className="citizens">
            <div className="output">
            <h2>Citizens:</h2>
            {citizensList}
            </div>
            {/* <table>
                <tr>
                    <th>Name</th>
                    <th>CNIC#</th>
                    <th>Phone#</th>
                    <th>Flat#</th>
                </tr>
                
            {this.props.citizens.map((citizen,index)=>{
                return <div key={index}>
                    <tr><td>{citizen.name}</td><td>{citizen.cnic}</td><td>{citizen.phoneno}</td><td>{citizen.flatno}</td></tr>
                </div>
            })}
             </table> */}
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        citizens:store.citizensReducer
    }
}
export default connect(mapStateToProps)(Citizens)