import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
  return (
    <div className="uk-grid-large uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-6@m" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: > div > a > .uk-card; delay: 100;">
      {props.members.map((member, i) => (
        <Card member={member} key={i}/>
      ))}
    </div>
  )
}

export default CardList;