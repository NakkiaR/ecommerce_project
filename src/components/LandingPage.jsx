import React, { Component } from 'react';


export default class LandingPage extends Component{

    render(){
        
            if (this.props.user.username == null){
            
                return(
                <h3 className="container"> You are not logged in! Please register if you are new user or login if you already have account.</h3>
                )
        }else{
            return(
            <h3 className="container"> Welcome to Stars {this.props.user.username}</h3>
    
            )

    }}
}