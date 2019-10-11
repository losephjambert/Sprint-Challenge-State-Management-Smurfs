import axios from 'axios';
import { baseURL, SERVICES } from '../api';

const START_DELETING_SMURF = `START_DELETING_SMURF`;
const SMURF_DELETE_SUCCESS = `SMURF_DELETE_SUCCESS`;
const SMURF_DELETE_FAILURE = `SMURF_DELETE_FAILURE`;

const deleteSmurf = id => dispatch => {
  dispatch({ type: START_DELETING_SMURF });

  axios
    .delete(`${baseURL}/${SERVICES.DELETE.smurfs}/${id}`)
    .then(response => dispatch({ type: SMURF_DELETE_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: SMURF_DELETE_FAILURE, payload: error }));
};

export { deleteSmurf, START_DELETING_SMURF, SMURF_DELETE_SUCCESS, SMURF_DELETE_FAILURE };
