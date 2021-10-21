import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import GameView from "./components/structure/GameView/GameView";
import Register from "./pages/Register/Register";
import CreateGame from "./pages/CreateGame/CreateGame";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute"
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
              <Route path="/game/view/:id" component={GameView}/>
              <GuardedRoute path="/game/create" component={CreateGame}/>
              <GuardedRoute path="/profiles" component={Profiles}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
