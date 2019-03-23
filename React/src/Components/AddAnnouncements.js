import React, { Component } from 'react';
import './AddCitizen.css';
import {addAnnouncement} from '../Actions/announcements-action'
import store from '../Redux'
class AddAnnouncements extends Component{
    handleSubmit=(e)=>{
        e.preventDefault()
        let title=this.refs.title.value
        let announce=this.refs.announce.value
        let announcement=[{title:title, announce:announce}]
        
        var options={
            method:'POST',
            body:JSON.stringify({announcement}),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch('/addAnn',options)
        .then((res)=>res.text())
        .then((json) => {
            console.log(json)
            this.props.dispatch(addAnnouncement(json.data))
          })
        .catch((error)=>console.log(error))
        // store.dispatch(addAnnouncement(announcement))
        // alert("Announcement Added")
    }
    render(){
        return(
            <div className="addannouncements">
            <h2>Add Announcements</h2>
            <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" ref="title" placeholder="Title Here..." required="required"/><br/><br/>
                <textarea className="input" rows="7" cols="70" ref="announce" placeholder="Announcement..."></textarea><br/><br/>
                <input type="submit" value="Add" />
            </form>
            </div>
        )
    }
}
export default AddAnnouncements