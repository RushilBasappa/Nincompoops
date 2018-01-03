import React from 'react';
import Link from 'react-router-dom/Link';
import logo from '../../../images/rushil.jpg';


const Card = (props) => {
  const { username } = props.member;
  return (
    <div>
      <Link to={`/members/${username}`}>
        <div className="uk-card uk-card-default" >
          <div className="uk-card-media-top">
            <img src={logo} alt="" height="184"/>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-padding-small uk-text-center">
                <p>{username[0].toUpperCase().concat(username.slice(1))}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    // <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-4@m">
    //   <Link to={`/members/${props.member.url}`}>
    //     <div className="uk-card uk-card-body uk-card-small uk-text-center uk-card-hover uk-card-default">
    //       <div className="uk-inline">
    //         <img className="uk-border-circle" src={props.member["image"]} width="200" alt="" />
    //         <div className="uk-overlay uk-position-bottom uk-light">
    //           <p className="uk-text-center">{props.member["name"]}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  )
}

export default Card;