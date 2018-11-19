import React from 'react';
/** import PropTypes from 'prop-types'; */
import '../app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function buildNav(nav, recursive = false) {
  return nav.map((link) => {
    // the nav links are objs (key/val)
    const [linkTitle, linkDest] = Object.entries(link)[0];

    if (!linkDest) {
      return (
        <span className="navbar-item" key={`drop__div__${linkTitle.toString()}`}>
          {linkTitle}
        </span>);
    }

    if (linkDest.map) {
      return (
        <div className="navbar-item has-dropdown is-hoverable" key={`div__${linkTitle.toString()}`}>
          <a href={linkDest} className="navbar-link">
            {linkTitle}
          </a>
          { recursive ? (
            <div className="navbar-dropdown">
              {buildNav(linkDest)}
            </div>
          ) : ''
          }
        </div>
      );
    }

    return (
      <Link to={linkDest} className="navbar-item" key={`div__link__${linkTitle.toString()}`}>
        {linkTitle}
      </Link>
    );
  });
}


const Nav = ({ nav }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Link>

      { buildNav(nav, true) }
    </div>
  </nav>
);

export default Nav;
