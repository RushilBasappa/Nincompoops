import React from 'react';

const PersonalDetails = (props) => {
  return (
    <article className="uk-article">
      <h1 className="uk-article-title">{props.name}</h1>
      <p className="uk-article-meta">{props.nickname}</p>
      <p className="">{props.desc}</p>
    </article>
  )
}

export default PersonalDetails;