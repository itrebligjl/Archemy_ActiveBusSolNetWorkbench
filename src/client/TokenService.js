/* eslint-env browser */

/**
 * @Namespace TokenService
 * @desc getter and setter for the token in window.localStorage
 */
const TokenService = {
  set token(token) {
    return localStorage.setItem('token', token);
  },

  get token() {
    return localStorage.getItem('token');
  },

};

module.exports = TokenService;
