import axios from 'axios';
import { baseURL, SERVICES } from '../api';

const START_FETCHING_SMURFS = `START_FETCHING_SMURFS`;
const SMURFS_FETCH_SUCCESS = `SMURFS_FETCH_SUCCESS`;
const SMURFS_FETCH_FAILURE = `SMURFS_FETCH_FAILURE`;

const fetchSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING_SMURFS });

  axios
    .get(`${baseURL}/${SERVICES.GET.smurfs}`)
    .then(response => console.log('get smurfs', response))
    .catch(error => dispatch({ type: SMURFS_FETCH_FAILURE, payload: error }));
};

export { fetchSmurfs, START_FETCHING_SMURFS, SMURFS_FETCH_SUCCESS, SMURFS_FETCH_FAILURE };

// dispatch({ type: SMURFS_FETCH_SUCCESS, payload: response.data })
