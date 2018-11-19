import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <form className="box">
    <h4 className="subtitle is-4">Select business solution to deploy:</h4>
    <div className="select">
      <select>
        <option>LymphMeter™ v1.0</option>
        <option>LymphMeter™ v1.1</option>
        <option>LymphMeter™ v2.0</option>
      </select>
    </div>
    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/search" type="button" className="button">Search</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/reuse" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/operate" type="button" className="button">Deploy</Link>
      </div>
    </section>
  </form>
);
