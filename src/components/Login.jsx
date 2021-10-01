import React, { Component } from 'react';
import axios from 'axios';
//import jwt_decode from "jwt-decode";

class Login extends Component {
    state = {
        user : {
        userName: 'mmarkos4',
        password: 'abcde12345',
        }    
    }

    
    // setItem(){

    // }

    loginUser =async () =>{


        //console.log();
       const jwt = localStorage.getItem('token');
       //const resp = await axios.get('https://localhost:44394/api/authentication', {headers: {Authorization: 'Bearer '  +  jwt}})
       let response = await axios.post('https://localhost:44394/api/authentication/login', this.state.user)
       
            //window.location = "/";    
            console.log("Hello user")          

          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.loginUser();
        
    };
   
        

    render(){
        return(
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
               
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.user.userName}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.user.password}/>
                
                <button type="submit">Login</button>
            </form>
            </React.Fragment>
        );
    }
}
export default Login;
