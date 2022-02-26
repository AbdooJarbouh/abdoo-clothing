import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import { Switch,Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>

);

function App() {
  return (
    
    <Switch>
      <div >
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/shop/hats' component={HatsPage} />
      </div>
    </Switch>
  );
}

export default App;
