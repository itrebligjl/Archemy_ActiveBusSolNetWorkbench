import React from 'react';
/** import PropTypes from 'prop-types'; */

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    /**
    this.state = {
      username: '',
      password: '',
      error: null,
    };
    */

    this.update = {
      username: this.updateState.bind(this, 'username'),
      password: this.updateState.bind(this, 'password'),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(field, event) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { history } = this.props;
    history.push('/solution/workspace');
    return false;
  }

  render() {
    return (

      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered max-d">
            <div className="column">
              <h3 className="title">Login</h3>
              <p className="subtitle">Please log in to proceed.</p>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  {/* USERNAME */}
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label htmlFor="Username" className="label">Username</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input id="Username" className="input is-medium" type="text" placeholder="Username" onChange={this.update.username} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label htmlFor="Password" className="label">Password</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input id="Password" className="input is-medium" type="password" placeholder="Company" onChange={this.update.password} />

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label htmlFor="Company" className="label">Company</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input id="Company" className="input is-medium" type="text" placeholder="Company" onChange={this.update.password} />

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <p className="control has-text-right">
                      <input className="button is-info is-medium max-d is-right" type="submit" value="Login" />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
