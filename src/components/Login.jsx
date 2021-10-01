// import React, { Component } from 'react';
// import axios from 'axios';
// //import jwt_decode from "jwt-decode";

// class Login extends Component {
//     state = {
//         user : {
//         userName: 'mmarkos4',
//         password: 'abcde12345',
//         }
        
//     }

    
//     // setItem(){

//     // }

//     loginUser =async () =>{


//         //console.log();
//        const jwt = localStorage.getItem('token');
//        const resp = await axios.get('https://localhost:44394/api/authentication', {headers: {Authorization: 'Bearer '  +  jwt}})
//        let response = await axios.post('https://localhost:44394/api/authentication', this.state.user)
       

//             window.location = "/";

           
            
              

//           }


//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
        
//         this.loginUser();
//     };
   
        

//     render(){
//         return(
//             <React.Fragment>
//             <form onSubmit={(event) => this.handleSubmit(event)}>
               
//                 <label>User Name</label>
//                 <input type="text" name="userName"onChange={this.handleChange} value={this.state.user.userName}/>
//                 <label>Password</label>
//                 <input type="text" name="password"onChange={this.handleChange} value={this.state.user.password}/>
                
//                 <button type="submit">Login</button>
//             </form>
//             </React.Fragment>
//         );
//     }
// }
// export default Login;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
async function loginUser(credentials) {
 return fetch('https://localhost:44394/api/authentication', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};