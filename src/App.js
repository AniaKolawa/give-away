import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
    return (
        <Router>
            <div className="App">
                <Menu/>
                <Switch>
                    <Route exact path="/" component={props => <Home {...props} /> } />
                    <Route path="/login"  component={props => <Login {...props} />} />
                    <Route path="/rejestracja" component={props => <Register {...props} />} />
                    <Route path="/wylogowano" component={props => <Logout {...props} /> } />
                </Switch>
            </div>
        </Router>
    );
}

export default App;