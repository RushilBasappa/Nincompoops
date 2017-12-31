import React from 'react';
import Link from 'react-router-dom/Link';


const Card = (props) => {
  return (
    <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-4@m">
      <Link to={`/${props.member["name"]}`}>
        <div className="uk-card uk-card-body uk-card-default">
          <div className="uk-inline uk-transition-toggle">
            <img className="uk-border-circle" src={props.member["image"]} width="200" alt="" />
            <div className="uk-overlay .uk-transition-slide-bottom-medium uk-position-bottom uk-light">
              <p className="uk-text-center">{props.member["name"]}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card;