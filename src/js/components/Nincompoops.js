import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Members as members} from '../config.js';
import CardList from "./CardList.js";
import Profile from "./Profile.js";
import '../../css/uikit.css';
import '../uikit.js';
import '../uikit-icons.js';

class Nincompoops extends React.Component {
  render() {
    return (
      <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
        <Route exact path="/" render={() => (<CardList members={members}/>)} />
        <Route path="/:name" render={({match}) => (<Profile member={members.find(m => m.name === match.params.name)}/>)} />
      </div >
    )
  }
}

export default Nincompoops;