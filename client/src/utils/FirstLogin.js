class FirstLogin {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static save(token) {
    localStorage.setItem('logged', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static check() {
    console.log('returning', (localStorage.getItem('logged') === null))
    return localStorage.getItem('logged') === null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static delete() {
    localStorage.removeItem('logged');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static retrieve() {
    return localStorage.getItem('logged');
  }

}

export default FirstLogin;