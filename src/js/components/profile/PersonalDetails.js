import React from 'react';

const PersonalDetails = (props) => {
  return (
    <article className="uk-article">
      <h1 className="uk-article-title">{props.member.name}</h1>
      <p className="uk-article-meta">{props.member.name}</p>
      <p className="uk-text-lead">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </article>
  )
}

export default PersonalDetails;