import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth, creatUserProfileDocument } from './Firebase/firebase.utils.js';

import { setCurrentUser } from './REDUX/USER/user.action'

import './App.css';
class App extends React.Component {
  unsubscribefromAuth = null;
  
  componentDidMount() { 

    const {setCurrentUser} = this.props;
      
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { 
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
        });
      }
          setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
 }
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
  
        </Switch>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
