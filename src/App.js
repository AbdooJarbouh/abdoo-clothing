import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"

function App() {
  return (
    <div>
    <Header /> 
    <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />

        
        </Switch>
      </div>
  )
}

export default App;
