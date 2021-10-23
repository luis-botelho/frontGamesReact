import './App.css';
import { Route, Switch } from "react-router";
import GuardedRoute from "./GuardedRoute/GuardedRoute"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import GameView from "./pages/GameView/GameView";
import Register from "./pages/Register/Register";
import CreateGame from "./pages/CreateGame/CreateGame";
import Profiles from "./pages/Profiles/Profiles";
import CreateProfiles from "./pages/CreateProfiles/CreateProfiles"
import FavoritesGames from "./pages/FavoritesGames/FavoritesGames"
import Logout from "./pages/Logout/Logout";
import Header from "./components/shared/Header/Header";
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
          <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/register" component={Register}/>
              <Route path="/game/view/:id" component={GameView}/>
              <GuardedRoute path="/game/create" component={CreateGame}/>
              <GuardedRoute path="/profiles/:id" component={Profiles}/>
              <GuardedRoute path="/profile/create/:id" component={CreateProfiles}/>
              <GuardedRoute path="/favorites" component={FavoritesGames}/>
          </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
