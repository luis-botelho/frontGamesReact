import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import './App.css';
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
          <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
