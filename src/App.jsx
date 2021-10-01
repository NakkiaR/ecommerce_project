
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import NavigationBar from './components/NavBar';




// function App() {
//     return (
//         <div className="App">
//             <NavBar />
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/about" exact component={About} />
//                 <Route path="/list" exact component={List} />
//                 {/* create props route path here */}
//                 {/* create redirect here route path here */}
//             </Switch>
//         </div>
//     );
// }


class App extends Component {
    state = { }

    // componentDidMount() {
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const user = jwtDecode(jwt);
    //         this.setState({
    //             user
    //         });
    //     } catch {

    //     }
    // }

render() {
    const user = this.state.user;
    return (
        <div>
            <NavigationBar user={user} />
            <Home />
            
            <div>
                {/* <Switch>
                    <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to="/login" />;                       
                        } else {
                            return <ProfileScreen {...props} user={user} />
                        }
                    }}
                    />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/login' component={LoginScreen} /> 
                    <Route path='/logout' component={Logout} />
                    <Route path='/not-found' component={NotFound} />
                    <Route path='/' exact component={LandingScreen} />
                    <Redirect to='/not-found'/>
                </Switch> */}
            </div>
        </div>                
    );
}
}

export default App;
