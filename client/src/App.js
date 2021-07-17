import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Books from "./pages/Books";
import Nav from "./components/Nav";
import NoMatch from './pages/NoMatch';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      
      <Nav />
      <Switch>
      <Route exact path='/' component={Books} />
      <Route exact path='/books' component={Books} />
      <Route exact path='/books/:id' component={Detail} />
      <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
