import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth, creatUserProfileDocument } from './Firebase/firebase.utils.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribefromAuth = null;
  
  componentDidMount() { 
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { 
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
        
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
 }
  render() {

    return (
      <div>
        <Header currentUser= {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
  
        </Switch>
      </div>
    )
  }
};

export default App;
