import React, { Component } from 'react';
import { Link } from 'react-router-dom';


  export default class NavBar extends Component {

    handleLogout=()=>{
        localStorage.clear();
        window.location = "/";

    }
    render() { 
                
        if(this.props.user.username == null){
            return (
                
                <ul> 
                <h3> Welcome to Stars !</h3> 
                <Link to='/registration'>  <li>  Register </li>   </Link> 

                <Link to='/login' >  <li>  Login </li> </Link> 
                </ul>               
            )

        }else{
        
            return (
                
                <ul>  
                <Link to='/home'> <li>Home</li> </Link> 
                <Link to='/createproduct'> <li>List a Star</li> </Link>
                <Link to='/createreview'> <li>Review a Star</li> </Link>
                <Link to={'/'} onClick={()=> this.handleLogout() } > <li>  Logout </li> </Link> 
                                  
                </ul>

            );
        }      
    }
}