import React from 'react'
import './App.css';
import Home from './components/home/Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Error from './components/Error';
import BuyProduct from './components/buyProduct/BuyProduct';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/buyproduct'><BuyProduct/></Route>
      <Route path='*'><Error/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
