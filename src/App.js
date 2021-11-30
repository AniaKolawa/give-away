
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {Link} from "react-scroll"
import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
      <Router>
        <div className="App">
          <Menu/>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
              <Route path="/rejestracja">
                  <Register />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
