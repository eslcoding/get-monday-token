import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Portal } from './pages/Portal';

function App() {
  return (
    <div className="App app-container">

      <Router>
       


        <Switch>
          <Route path='/' component={Portal} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
