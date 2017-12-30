import React from 'react';

const SlideShow = () => {
  const config = "autoplay:true;animation: fade; autoplay-interval:1500"
  return (
    // <div className="uk-child-width-1-2@m" uk-grid="true">
    //   <div>
    //     <div className="uk-position-relative uk-light" uk-slideshow={config}>
    //       <ul className="uk-slideshow-items">
    //         <li><img src="https://dummyimage.com/600x400/000/fff" alt="" uk-cover="true" /></li>
    //         <li><img src="https://dummyimage.com/600x400/ff00ff/fff" alt="" uk-cover="true" /></li>
    //         <li><img src="https://dummyimage.com/600x400/2b9466/fff" alt="" uk-cover="true" /></li>
    //       </ul>
    //       <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
    //       <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
    //     </div>
    //   </div>
    // </div>
    <a href="" uk-icon="icon: heart"></a>
  )
}

const Profile = (props) => {
  return (
    <div>
      <div className="uk-text-center">
        <SlideShow />
      </div>
      {/* <p>{`Hello ${props.member.name}`}</p>
      <img src={props.member.image} alt=""/> */}
    </div>
  )
}

export default Profile;