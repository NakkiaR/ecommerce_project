class App extends Component {
    state = { }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
        } catch {

        }
    }

render() {
    const user = this.state.user;
    return (
        <div>
            <NavigationBar user={user} />
            <div>
                <Switch>
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
            </Switch>
        </div>
    </div>                
    );
}
}
