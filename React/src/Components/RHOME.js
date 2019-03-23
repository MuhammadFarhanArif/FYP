import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Redux'
import RHeader from './RHeader'
import AddRequests from './AddRequests'
import RHomeData from './RHomeData'
import {setAnnouncement} from '../Actions/announcements-action'
class RHOME extends Component{
    componentDidMount(){
        fetch('/getAnn')
        .then((res)=>res.text())
        .then((json) => {
            console.log(json)
            this.props.dispatch(setAnnouncement(json.data))
          })
        .catch((error)=>console.log(error))
    }
    render(){
        const {announcements}=this.props
        const allAnnounce=announcements.map((announcement,index)=>{
            return <div key={index}>
            <li>Title:{announcement[0].title}</li>
            <li>Announcement:{announcement[1].announce}</li>
            </div> 
            })
        
        return(
            <Provider store={store}>
            <BrowserRouter>
            <div className="rhome">
            <RHeader/>
              <Switch>
               <Route path="/addrequests" component={AddRequests}/>
               {/* <Route path="/rhomedata" component={RHomeData}/> */}
               {/* <Route path="/" component={RHomeData}/> */}
              </Switch>
              <div className="out">
            <h2>Announcements</h2>
           {allAnnounce}
            </div>
          
            </div>
            </BrowserRouter>
            </Provider>
        )
    }
}
const mapStateToProps=(store)=>{
    return {
        announcements:store.announcementsReducer
    }
}
export default connect(mapStateToProps)(RHOME)