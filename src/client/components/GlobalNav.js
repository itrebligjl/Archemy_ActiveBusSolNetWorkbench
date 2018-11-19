import React from 'react';
/** import { Link } from 'react-router-dom'; */
import '../app.css';
import logo from '../img/Archemy_TM.png';

export default () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src={logo} alt="Archemy Logo" />
        <h3 className="nav-title">Active Business Solutions Network Workbench</h3>
      </div>
    </div>
  </nav>
);
