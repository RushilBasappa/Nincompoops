import React from 'react';
import _ from 'lodash';

const SlideShow = (props) => {
  const config = "autoplay:true;animation: fade; autoplay-interval:3000"
  return (
    <div>
      <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow={config}>
        <ul className="uk-slideshow-items">
          <li><img src="https://dummyimage.com/600x400/000/fff" alt="" uk-cover="true" /></li>
          <li><img src="https://dummyimage.com/600x400/ff00ff/fff" alt="" uk-cover="true" /></li>
          <li><img src="https://dummyimage.com/600x400/2b9466/fff" alt="" uk-cover="true" /></li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
      </div>
    </div>
  )
}

const PersonalDetails = (props) => {
  return (
    <article className="uk-article">
      <h1 className="uk-article-title">{props.member.name}</h1>
      <p className="uk-article-meta">{props.member.name}</p>
      <p className="uk-text-lead">{_.concat("testing ", _.times(20).map(i => "testing "))}</p>
      <div className="uk-grid-small uk-child-width-auto" uk-grid>
        <div>
            <button className="uk-button uk-button-text" type="button" uk-toggle="target: #toggle-usage">5 Comments</button>
            <p id="toggle-usage" hidden>What's up?</p>
        </div>
    </div>
    </article>
  )
}

const Profile = (props) => {
  return (
    <div className="uk-child-width-1-2@m" uk-grid="true">
      <PersonalDetails {...props} />
      <SlideShow />
    </div>
  )
}

export default Profile;