const usercontroller = require('./../controllers/user.ctrl');

module.exports = (router) => {
  /** Get User */
  router
    .route('./user/:id')
    .get(usercontroller.getUser);

  /** Add User */
  router
    .route('/user')
    .post(usercontroller.addUser);
};
