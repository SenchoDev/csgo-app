import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.scss";

import Navbar from './components/navbar/navbar.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import TeamsList from './pages/teamslist/teamslist.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <main className="main-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/players" component={TeamsList}/>
          <Route
              exact
              path="/signin"
              component={SignInAndSignUpPage }
            />
        </Switch>
      </main>
    </div>
  );
};

// <div className="child-1"><h1 className="child-1-inner">hey</h1>
//       </div>


export default App;
