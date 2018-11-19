import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: '16em',
};

export default () => (
  <form className="box">
    <section className="section">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label htmlFor="ComponentImplemented" className="label" style={style}>Component being implemented: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input id="ComponentImplemented" className="input is-static" type="text" value="imp-rmp-06/01/18-LymphMeter" readOnly />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label htmlFor="CandidateSolReused" className="label" style={style}>Candidate solution reused: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input id="CandidateSolReused" className="input is-static" type="text" value="Candidate Solution-1 (90% match)" readOnly />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section box">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label htmlFor="TargetSolName" className="label" style={style}>Enter target solution name: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input id="TargetSolName" className="input" type="text" placeholder="e.g., LymphMeter" />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label htmlFor="TargetSolVersion" className="label" style={style}>Enter target solution version: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input id="TargetSolVersion" className="input is-small" type="text" placeholder="e.g., 2.0" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/discover" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/discover/review" type="button" className="button">Review</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/reuse" type="button" className="button">Proceed</Link>
      </div>
    </section>
  </form>
);
