import React from 'react';
import { Members, Details } from '../config.js';
import '../../css/uikit.css';
import '../uikit.js';

const Card = (props) => {
  return (
    <div className="uk-width-1-4">
      <div className="uk-card uk-card-body uk-card-default">
        <img src={props.details[props.member]["image"]} width="200" alt="" />
      </div>
    </div>
  )
}

const CardList = (props) => {
  return(
    props.members.map(member => (<Card member={member} details={props.details}/>))
  )
}

class Nincompoops extends React.Component {
  render() {
    return (
      <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
        <div uk-grid="true">
          <CardList members={Members} details={Details}/>
        </div>
      </div>
    )
  }
}

export default Nincompoops;