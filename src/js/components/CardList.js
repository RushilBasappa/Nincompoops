import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
  return (
    <div uk-grid="true">
      {props.members.map((member, i) => (
        <Card member={member} key={i}/>
      ))}
    </div>
  )
}

export default CardList;