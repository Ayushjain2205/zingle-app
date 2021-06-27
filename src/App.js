import "./App.css";
import "./bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Explore from "./Components/Explore";
import Matches from "./Components/Matches";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(props) => <Home />} />
          <Route exact path='/explore' render={(props) => <Explore />} />
          <Route exact path='/matches' render={(props) => <Matches />} />
          <Route exact path='/profile' render={(props) => <Profile />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
