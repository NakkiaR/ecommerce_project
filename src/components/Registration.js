import React, { Component } from 'react';
import axios from 'axios';
//import jwt_decode from "jwt-decode";

class RegisterUser extends Component {
    state = {
        user : {
        firstName: 'mark4',
        lastName: 'Markos4',
        userName: 'mmarkos4',
        password: 'abcde12345',
        email: 'mm4@gmail.com',        
        phoneNumber: '333-333-3330'
        }
        
    }

    
    // setItem(){

    // }

    registerUser =async () =>{

        let user = {

        }

        //console.log();
       let response = await axios.post('https://localhost:44394/api/authentication', this.state.user)
        
            console.log(response);
            //TODO: set the token in localStorage with the JWT that comes back
            //TODO: refresh the page to re-route back to the App component
            
             localStorage.setItem('token' , response.token);
             const tokenFromStorage = localStorage.getItem('token');
            // localStorage.removeItem('token');
            console.log(tokenFromStorage);

            window.location = "/";

           
            
              

          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert(`First Name: ${this.state.user.firstName} Last Name: ${this.state.user.lastName}`)  // add the other RegisterUser states objects?
        //TODO: call registerUser
        this.registerUser();
    };
   
        

    render(){
        return(
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>First Name</label>
                <input type="text" name="firstName"onChange={this.handleChange} value={this.state.user.firstName}/>
                <label>Last Name</label>
                <input type="text" name="lastName"onChange={this.handleChange} value={this.state.user.lastName}/>
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.user.userName}/>
                <label>Email</label>
                <input type="text" name="email"onChange={this.handleChange} value={this.state.user.email}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.user.password}/>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber"onChange={this.handleChange} value={this.state.user.phoneNumber}/>  
                <button type="submit">Register</button>
            </form>
            </React.Fragment>
        );
    }
}
export default RegisterUser;