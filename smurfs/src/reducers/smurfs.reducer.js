import { START_FETCHING_SMURFS, SMURFS_FETCH_SUCCESS, SMURFS_FETCH_FAILURE } from '../actions';
import { initialState } from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_SMURFS:
      console.log(START_FETCHING_SMURFS);
      return {
        ...state,
      };
    case SMURFS_FETCH_SUCCESS:
      console.log(SMURFS_FETCH_SUCCESS);
      return {
        ...state,
      };
    case SMURFS_FETCH_FAILURE:
      console.log(SMURFS_FETCH_FAILURE);
      return {
        ...state,
      };
    default:
      console.log('SMURFS reducer default', state);
      return state;
  }
};
