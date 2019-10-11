import axios from 'axios';
import { baseURL, SERVICES } from '../api';

const START_CREATING_SMURF = `START_CREATING_SMURF`;
const SMURF_CREATE_SUCCESS = `SMURF_CREATE_SUCCESS`;
const SMURF_CREATE_FAILURE = `SMURF_CREATE_FAILURE`;

const createSmurf = smurfToCreate => dispatch => {
  dispatch({ type: START_CREATING_SMURF });

  axios
    .post(`${baseURL}/${SERVICES.POST.smurfs}`, smurfToCreate)
    .then(response => dispatch({ type: SMURF_CREATE_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: SMURF_CREATE_FAILURE, payload: error }));
};

export { createSmurf, START_CREATING_SMURF, SMURF_CREATE_SUCCESS, SMURF_CREATE_FAILURE };
