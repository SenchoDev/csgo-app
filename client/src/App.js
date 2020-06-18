import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import TeamsList from "./pages/teamslist/teamslist.component";
import PlayersSettings from "./pages/playerssettings/playerssettings.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import PlayersCrosshairs from "./pages/playerscrosshairs/playerscrosshairs.component";
import Footer from "./components/footer/footer.component";
import PlayerInfo from "./components/player-info/player-info.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { selectPlayersInfo } from "./redux/teams/teams.selector";

import "./App.scss";

const App = ({ checkUserSession, currentUser, info }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      {info ? <PlayerInfo/> : ''}
      <div className={`${info ? "blur" : ""} container`}>
        <Navbar />
        <Header />

        <main className='main-wrapper'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/players" component={TeamsList} />
            <Route exact path="/players_settings" component={PlayersSettings} />
            <Route
              exact
              path="/players_crosshairs"
              component={PlayersCrosshairs}
            />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  info: selectPlayersInfo,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
