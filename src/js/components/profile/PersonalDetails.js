import React from 'react';

const PersonalDetails = (props) => {
  return (
    <article className="uk-article">
      <h1 className="uk-article-title">{props.name}</h1>
      <p className="uk-article-meta"> -> {props.funname}</p>
      <p>PunchLine: {props.punchline}</p>
      <p className="">{props.desc}</p>
      <p>One nice word: {props.onw}</p>
    </article>
  )
}

export default PersonalDetails;