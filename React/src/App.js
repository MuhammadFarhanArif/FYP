import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Header from './Components/Header'
// import Home from './Components/Home'
// import Citizens from './Components/Citizens'
// import AddCitizen from './Components/AddCitizen'
// import AddEmp from './Components/AddEmp'
// import Employees from './Components/Employees'
// import AddAnnouncements from './Components/AddAnnouncements'
import AHOME from './Components/AHOME'
import { Provider } from 'react-redux'
import store from './Redux'
import RHOME from './Components/RHOME'
import Login from './Components/login'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        {/* <Header/> */}
        <Switch>
          <AHOME/>
          {/* <Login/> */}
         
          {/* <Route path="/home" component={Home} />
          <Route path="/citizens" component={Citizens} />
          <Route path="/addcitizen" component={AddCitizen} />
          <Route path="/addemp" component={AddEmp}/>
          <Route path="/employees" component={Employees}/>
          <Route path="/addannouncements" component={AddAnnouncements}/>
          <Route path="/" component={Home} /> */}
        </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
