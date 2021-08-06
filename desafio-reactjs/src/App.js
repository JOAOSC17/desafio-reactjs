import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageProfile from './pages/Profile/Profile';
import PageSearch from './pages/Search/Search';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/profile/:login' component={PageProfile}/>
        <Route path='/' exact component={PageSearch}/>
        <Route path='*'>
         <h1 style={{
            fontSize:80,
            marginTop:100,
            display:'flex',
            justifyContent:'center',
          }}>Not Found</h1> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
