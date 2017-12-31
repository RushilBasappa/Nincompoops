import React from 'react';
import _ from 'lodash';

import PersonalDetails from './PersonalDetails';
import SlideShow from './SlideShow';
import CommentsList from './CommentsList';

const Profile = (props) => {
  return (
    <div>
      <div className="uk-child-width-1-2@m" uk-grid="true">
        <PersonalDetails {...props} />
        <SlideShow />
      </div>
      <CommentsList />
    </div>
  )
}

export default Profile;