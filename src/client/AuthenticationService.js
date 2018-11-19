import TokenService from './TokenService';

/* eslint-env browser */
export default authRoute => ({
  /**
   * @method attemptLogin
   * @param {Object} creds - The submitted credentials
   * @param {string} creds.username - The username of the user.
   * @param {string} creds.department - The user's cleartext password.
   */
  async attemptLogin({ username, password }) {
    try {
      const response = await fetch(authRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // convert the response to JSON
      // retrieve the token from the response
      const { token } = await response.json();

      // if we couldn't get a token, die here
      if (!token) {
        throw new Error(401);
      }

      // save the token in the window
      TokenService.token = token;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  isAuthenticated() {
    return !!TokenService.token;
  },


});
