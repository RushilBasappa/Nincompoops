import React from 'react';
import logo from "../../../images/group/bg.jpg";

const MainPage = () => {
  return (
    <div className="uk-card uk-card-default uk-card-body" >
      <h1 className="uk-card-title">Yo As****es!</h1>
      <div uk-grid="true">
        <div className="uk-width-1-2@m">
          <p className="">
            You should’ve got it by now that this is our very own personal space to bitch about each other, fight like dickheads and fcuk with each other’s heads! OH WAIT… we already do that 🤪
          </p>
          <p>
            So, let’s be rational here and behave (psshhtt…)🤫 OR We can amplify it!!! ( bring this shit to the web 🙏🏻 ).
            <br />
            Thanks to the biggest As****e of all for creating it 🙏🏻 ( No names needed cause we all know who… or do we? )
          </p>
          <p>
            Okay cutting the bullcrap short – im pretty sure I need not provide you - shit heads, with instructions seeing you all passed in FLYING COLOURS out of OSMANIA!
          </p>
        </div>
        <div className="uk-width-1-2@m">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainPage;