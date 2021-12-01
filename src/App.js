import './App.css';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Checkout from './Checkout';
import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Runs once at load
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // Naming Convention: BEM
    // Used For: Styling
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
