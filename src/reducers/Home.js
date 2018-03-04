import { GET_USERS_INFO } from '../actions';

const initialState = {
  meta: {
    isLoaded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_INFO: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
