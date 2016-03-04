import { FETCH_ISSUES } from '../actions/index'


const loadIssuesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      console.log('reducing data!');
      return action.payload.data;
    default:
      return state;
  }
};

export default loadIssuesReducer;
