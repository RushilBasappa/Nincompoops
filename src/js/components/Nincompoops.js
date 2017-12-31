import $ from 'jquery';
import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Members as members } from '../config.js';
import CardList from "./index/CardList.js";
import Profile from "./profile/Profile.js";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

const Navbar = (props) => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-container uk-container-expand ">
        <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to={`/`}>The Nincompoops</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

class Nincompoops extends React.Component {
  render() {
    return (
      <div style={{WebkitFontSmoothing: 'antialiased'}}>
        <Navbar />
        <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
          <Route exact path="/" render={() => (<CardList members={members} />)} />
          <Route path="/:name" render={({ match }) => (<Profile member={members.find(m => m.name === match.params.name)} />)} />
        </div >
      </div>

    )
  }
}

export default Nincompoops;