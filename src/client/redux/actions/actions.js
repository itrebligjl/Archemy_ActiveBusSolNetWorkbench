/** */
import axios from 'axios';

/** const url = "http://localhost:5000/api/" */
const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/';

export function getUser(_id) {
  return axios.get(`${url}user/${_id}`).then(res => res.data).catch(err => console.log(err));
}
export function SignInUser(userData) {
  return (dispatch) => {
    console.log('adding us..');
    axios.post(`${url}user`, userData).then((res) => {
      const user = res.data;
      console.log('==================sign-in=======');
      console.log(user);
      console.log('==================sign-in=======');
      localStorage.setItem('Auth', JSON.stringify(user));
      dispatch({ type: 'SET_USER', user });
    }).catch(err => console.log(err));
  };
}
export function toggleClose() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: false });
  };
}
export function toggleOpen() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: true });
  };
}
