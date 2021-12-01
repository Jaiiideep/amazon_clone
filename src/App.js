import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // Naming Convention: BEM
    // Used For: Styling
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* Checkout */}
          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* Home */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
