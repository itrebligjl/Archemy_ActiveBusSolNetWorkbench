import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <form className="box">
    <h4 className="subtitle is-4">Search for candidate solution that matches a component/project:</h4>
    <div className="select">
      <select>
        <option>imp-rmp – 6/01/18 – P1</option>
        <option>imp-rmp – 6/01/18 – LymphMeter™</option>
        <option>imp-rmp – 6/01/18 – P3</option>
      </select>
    </div>
    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/elicit" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/discover" type="button" className="button">Next</Link>
      </div>
    </section>
  </form>
);
