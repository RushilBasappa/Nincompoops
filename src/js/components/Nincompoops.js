import $ from 'jquery';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import CardList from "./index/CardList.js";
import Profile from "./profile/Profile.js";
import Navbar from './Navbar.js'
import MainPage from "./MainPage.js";
import axios from 'axios';

UIkit.use(Icons);

class Nincompoops extends React.Component {
  componentDidMount() {
    axios.get('/api/members')
      .then(res => {
        this.setState({ members: res.data });
      })
  }
  state= {
    members: []
  }
  render() {
    return (
      <div style={{ WebkitFontSmoothing: 'antialiased' }}>
        <Navbar />
        <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
          <Route exact path="/" render={() => (<MainPage />)} />
          <Route exact path="/members" render={() => (<CardList members={this.state.members} />)} />
          <Route path="/members/:name" render={({ match }) => (<Profile member={this.state.members.find(m => m.url === match.params.name)} />)} />
        </div >
      </div>

    )
  }
}

export default Nincompoops;