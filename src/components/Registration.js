import React, { Component } from 'react';
import axios from 'axios';
//import jwt_decode from "jwt-decode";

class RegisterUser extends Component {
    state = {
        
        firstName: 'mark2',
        lastName: 'Markos2',
        userName: 'mmarkos2',
        password: 'abcde12345',
        email: 'mm2@gmail.com',        
        phoneNumber: '333-333-3332'
        
    }

    
    // setItem(){

    // }

    registerUser =async () =>{
        //console.log();
       let response = await axios.post('https://localhost:44394/api/authentication', this.state.user)
        
            console.log(response);
            //TODO: set the token in localStorage with the JWT that comes back
            //TODO: refresh the page to re-route back to the App component
            
             localStorage.setItem('token' , response.token);
             const tokenFromStorage = localStorage.getItem('token');
            // localStorage.removeItem('token');
            window.location = "/";

           
            
            //console.log(this.state.user);

          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.prevenetDefault();
        alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName}`)  // add the other RegisterUser states objects?
        //TODO: call registerUser
        this.registerUser();
    };
   
        

    render(){
        return(
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>First Name</label>
                <input type="text" name="firstName"onChange={this.handleChange} value={this.state.firstName}/>
                <label>Last Name</label>
                <input type="text" name="lastName"onChange={this.handleChange} value={this.state.lastName}/>
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.userName}/>
                <label>Email</label>
                <input type="text" name="email"onChange={this.handleChange} value={this.state.email}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.password}/>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber"onChange={this.handleChange} value={this.state.phoneNumber}/>  
                <button type="submit">Register</button>
            </form>
            </React.Fragment>
        );
    }
}
export default RegisterUser;