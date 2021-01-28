import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Album from "./Pages/Album";
import Artist from "./Pages/Artist";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Album">
          <Album />
        </Route>
        <Route path="/artist">
          <Artist />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
