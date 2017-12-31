import React from 'react';

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
    <div>
      <h1>{props.member.name}</h1>
    </div>
  )
}

const Profile = (props) => {
  return (
    <div className="uk-text-center uk-child-width-1-2@m" uk-grid="true">
      <SlideShow />
      <PersonalDetails {...props} />
    </div>
  )
}

export default Profile;