
import React from 'react';
//import {Switch, Route} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './components/NavBar'
//import axios from 'axios';
import RegisterUser from './components/Registration';
 



class App extends React.Component {
    state = {
        user: {
            firstName: 'Mark2',
            lastName: 'Markos2',
            userName: 'mmarkos2',
            password: 'abcde12345',
            email: 'mm2@gmail.com',        
            phoneNumber: '333-333-3334'
            }
        
         }


    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwt_decode(jwt);
            this.setState({
                user
            });
        } catch {

        }
    }

render() {
    //const user = this.state.user;
    return (
        <div>
             {/* <NavBar user={user} />  */}
            <div>

                <RegisterUser  s ={this.state.user}/>
                
                    {/* <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to="/login" />;                       
                        } else {
                            return <ProfileScreen {...props} user={user} />
                        }
                    }}
                /> */}
                {/* <Route path='/register' component={RegisterScreen} />
                <Route path='/login' component={LoginScreen} />  */}
                {/* <Route path='/logout' component={Logout} />
                <Route path='/not-found' component={NotFound} />
                <Route path='/' exact component={LandingScreen} />
                <Redirect to='/not-found'/> */}
            
        </div>
    </div>                
    );
}
}
export default App;

