//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import MainPage from "./components/Mainpage/Mainpage"
import CreateInventory from "./components/CreateInventory/CreateInventory";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <MainPage />} />
          <Route exact path="/create" component={() => <CreateInventory />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
