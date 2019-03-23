import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Citizens from './Citizens'
import AddCitizen from './AddCitizen'
import AddEmp from './AddEmp'
import Employees from './Employees'
import AddAnnouncements from './AddAnnouncements'
import { Provider } from 'react-redux'
import store from '../Redux'
class AHOME extends Component {
    render() {
      return (
        <Provider store={store}>
        <BrowserRouter>
        <div className="ahome">
          <Header/>
          <Switch>
           
           
            <Route path="/home" component={Home} />
            <Route path="/citizens" component={Citizens} />
            <Route path="/addcitizen" component={AddCitizen} />
            <Route path="/addemp" component={AddEmp}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/addannouncements" component={AddAnnouncements}/>
            

            <Route path="/" component={Home} />
          </Switch>
        </div>
        </BrowserRouter>
        </Provider>
      );
    }
  }
  
  export default AHOME;
  