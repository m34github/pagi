import { firestore } from '../commons/firebase';

export const GET_USERS_INFO = 'GET_USERS_INFO';

const getUsersInfo = () => {
  return (dispatch, getState) => {
    firestore.collection('users').get().then((snapshot) => {
      dispatch({
        type: GET_USERS_INFO,
        payload: {
          docs: snapshot.docs
        },
        meta: {
          isLoaded: true
        }
      });
    });
  }
}

export const action = {
  getUsersInfo: getUsersInfo
};
