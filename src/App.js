//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MainPage from "./components/Mainpage/Mainpage"
import CreateInventory from "./components/CreateInventory/CreateInventory";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <MainPage />} />
          <Route exact path="/create" component={() => <CreateInventory />} />
          <Route exact path="/edit/:id" component={() => <EditInventory />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
