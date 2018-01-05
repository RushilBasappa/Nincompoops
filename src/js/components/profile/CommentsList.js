import React from 'react';
import Comment from './Comment';

const CommentsList = () => {
  return (
    <div className="uk-margin">
      <button className="uk-button uk-button-text" type="button" uk-toggle="target: #toggle-usage">Comments</button>
      <ul id="toggle-usage" className="uk-comment-list" hidden>
        Feature coming soon!!!
        {/* {_.times(2).map(i => (<Comment />))} */}
      </ul>
    </div>
  )
}

export default CommentsList;