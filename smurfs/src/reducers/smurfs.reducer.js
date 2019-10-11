import { START_FETCHING_SMURFS, SMURFS_FETCH_SUCCESS, SMURFS_FETCH_FAILURE } from '../actions';
import { START_CREATING_SMURF, SMURF_CREATE_SUCCESS, SMURF_CREATE_FAILURE } from '../actions';
import { START_DELETING_SMURF, SMURF_DELETE_SUCCESS, SMURF_DELETE_FAILURE } from '../actions';
import { initialState } from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_SMURFS:
      console.log(START_FETCHING_SMURFS);
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case SMURFS_FETCH_SUCCESS:
      console.log(SMURFS_FETCH_SUCCESS);
      return {
        ...state,
        isFetching: false,
        smurfsList: [...action.payload],
        error: '',
      };
    case SMURFS_FETCH_FAILURE:
      console.log(SMURFS_FETCH_FAILURE);
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case START_CREATING_SMURF:
      console.log(START_CREATING_SMURF);
      return {
        ...state,
        isCreating: true,
        creationError: '',
      };
    case SMURF_CREATE_SUCCESS:
      console.log(SMURF_CREATE_SUCCESS, action.payload);
      return {
        ...state,
        isCreating: false,
        smurfsList: action.payload,
        creationError: '',
      };
    case SMURF_CREATE_FAILURE:
      console.log(SMURF_CREATE_FAILURE);
      return {
        ...state,
        isCreating: false,
        creationError: action.payload,
      };
    case START_DELETING_SMURF:
      console.log(START_DELETING_SMURF);
      return {
        ...state,
        isDeleting: true,
        deletionError: '',
      };
    case SMURF_DELETE_SUCCESS:
      console.log(SMURF_DELETE_SUCCESS, action.payload);
      return {
        ...state,
        isdELETING: false,
        smurfsList: action.payload,
        deletionError: '',
      };
    case SMURF_DELETE_FAILURE:
      console.log(SMURF_DELETE_FAILURE);
      return {
        ...state,
        isDeleting: false,
        deletionError: action.payload,
      };
    default:
      console.log('SMURFS reducer default', state);
      return state;
  }
};
