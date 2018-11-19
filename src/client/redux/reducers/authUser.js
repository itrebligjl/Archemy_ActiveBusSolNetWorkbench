const initialState = {
  user: {},
  isAuth: false,
  profile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      console.log('setting user...');
      console.log(action.user.following);
      console.log(action.user.name);
      return {
        ...state,
        isAuth: Object.keys(action.user).length > 0 ? 'yes' : 'no',
        user: action.user
      };
    }
    default:
      return state;
  }
};
