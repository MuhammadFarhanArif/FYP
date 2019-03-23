import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'

class RHomeData extends Component{
    render(){
        const {announcements}=this.props
        const allAnnounce=announcements.map((announcement,index)=>{
            return <div key={index}>
            <li>Title:{announcement[0].title}</li>
            <li>Announcement:{announcement[1].announce}</li>
            </div> 
            })
        return(
            <div className="">
            <div className="out">
            <h2>Announcements</h2>
           {allAnnounce}
            </div>
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return {
        announcements:store.announcementsReducer
    }
}
export default connect(mapStateToProps)(RHomeData)

