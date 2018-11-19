import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <form className="box">
    <h4 className="subtitle is-4">Select candidate reusable solution:</h4>
    <div className="select">
      <select>
        <option>Candidate solution-1 (90% match)</option>
        <option>Candidate solution-2 (80% match)</option>
        <option>Candidate solution-3 (70% match)</option>
      </select>
    </div>
    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/search" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/discoverreview" type="button" className="button">Next</Link>
      </div>
    </section>
  </form>);
