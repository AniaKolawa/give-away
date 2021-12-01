
import './App.css';
import {BrowserRouter as Router,
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
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
              <Route path="/rejestracja">
                  <Register />
              </Route>
              <Route path="/wylogowano">
                  <Logout />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
