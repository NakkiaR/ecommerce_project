import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import React, { Component } from 'react';
//import { Link, Switch, Route } from 'react-router';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import jwt_decode from "jwt-decode";
import Home from './components/Home';
export default class App extends Component {

  state= {
      user:{}

   };


  componentDidMount() {

    
      const jwt = localStorage.getItem('token');
      try{
      const user = jwt_decode(jwt);  
          
               
               this.setState({
                  user
              });                     
       
              }catch {
         
       }
      }

  render() {    
    return (
        <BrowserRouter>
      <div className="App">
        
            <NavBar user = {this.state.user}/>
            <Switch>
              <Route exact path="/"  component={()=><LandingPage user = {this.state.user}/>}/>
              <Route exact path="/registration"  component={Registration}/>
              <Route exact path="/login"  component={Login}/>
              <Route exact path="/home"  component={Home}/>              
             
            </Switch>
          </div>
          </BrowserRouter>
      
    );
  }
}