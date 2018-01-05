import React from 'react';

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const SlideShow = (props) => {
  const images = importAll(require.context('../../../images/group/', false, /\.(png|jpe?g|svg)$/));
  const config = "autoplay:true;animation: fade; autoplay-interval:3000"
  return (
    <div>
      <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow={config}>
        <ul className="uk-slideshow-items">
          {Object.values(images).map(image => (<li><img src={image} alt="" uk-cover="true" /></li>))}
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
      </div>
    </div>
  )
}

export default SlideShow;