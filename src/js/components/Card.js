import React from 'react';
import Link from 'react-router-dom/Link';


const Card = (props) => {
  return (
    <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-4@m">
      <div className="uk-card uk-card-body uk-card-default">
        <Link to={`/${props.member["name"]}`}>
          <div className="uk-inline">
            <img src={props.member["image"]} width="200" alt="" />
            <div className="uk-overlay uk-position-bottom uk-light">
              <p>{props.member["name"]}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card;