
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {Link} from "react-scroll"
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
