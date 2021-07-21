import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageProfile from './pages/Profile/Profile';
import PageSearch from './pages/Search/Search';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/profile/:login' component={PageProfile}/>
        <Route path='/' component={PageSearch}/>
      </Switch>
    </Router>
  );
}

export default App;
