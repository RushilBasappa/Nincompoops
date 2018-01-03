import $ from 'jquery';
import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import CardList from "./index/CardList.js";
import Profile from "./profile/Profile.js";
import Navbar from './Navbar.js'
import MainPage from "./mainpage/MainPage.js";
import axios from 'axios';

UIkit.use(Icons);

class Nincompoops extends React.Component {
  state = {
    members: []
  }
  componentDidMount() {
    axios.get('/api/members')
      .then(res => {
        this.setState({ members: res.data });
      })
  }
  render() {
    let member = "";
    return (
      <div style={{ WebkitFontSmoothing: 'antialiased' }}>
        <Navbar />
        <div className="uk-container uk-container-center uk-margin-top uk-margin-medium-bottom">
          <Route exact path="/" render={() => (<MainPage />)} />
          <Route exact path="/members" render={() => (<CardList members={this.state.members} />)} />
          <Route path="/members/:name" render={({ match }) => {
            if ((member = this.state.members.find(m => m.username === match.params.name))) {
              return <Profile member={member} />
            } else {
              return <Redirect to="/" />
            }
          }} />
        </div >
      </div>
    )
  }
}

export default Nincompoops;