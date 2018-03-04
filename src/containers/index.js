import { connect } from 'react-redux';

import { action } from '../actions';
import HomeComponent from '../components/Home.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersInfo: () => {
      dispatch(action.getUsersInfo());
    }
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
