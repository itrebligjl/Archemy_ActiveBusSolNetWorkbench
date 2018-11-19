import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function buildNav(nav, path) {
  return nav.map((link) => {
    // the nav links are objs (key/val)
    const [linkTitle, linkDest] = Object.entries(link)[0];

    const active = (path === linkDest) ? 'is-active' : '';
    return (
      <li className={active}>
        <Link to={linkDest} className="navbar-item" key={`div__subnav__${linkTitle.toString()}`}>
          {linkTitle}
        </Link>
      </li>
    );
  });
}

export default ({ nav, path }) => {
  const { Build } = nav.find(obj => ('Build' in obj));

  return (
    <div className="tabs">
      <ul>
        {buildNav(Build, path)}
      </ul>
    </div>
  );
};
