import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-container uk-container-expand ">
        <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
          <div className="uk-navbar-center">
            <div className="uk-navbar-center-left"><div>
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to={`/members`} >Members</Link>
                </li>
              </ul>
            </div></div>
            <Link to={`/`} className="uk-navbar-item uk-logo">
              The Nincompoops
            </Link>
            <div className="uk-navbar-center-right">
              <div>
                <ul className="uk-navbar-nav">
                  <li>
                    <Link to={`/members`} >Members</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;