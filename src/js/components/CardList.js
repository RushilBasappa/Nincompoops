import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
  return (
    <div className="uk-grid-large" uk-grid="true">
      {props.members.map((member, i) => (
        <Card member={member} key={i}/>
      ))}
    </div>
  )
}

export default CardList;