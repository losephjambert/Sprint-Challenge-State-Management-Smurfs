import React from 'react';
import { connect } from 'react-redux';

import { createSmurf } from '../actions';

import CreateSmurfForm from './CreateSmurfForm';

const SmurfsFormContainer = props => {
  return (
    <div>
      <h2>Create a Smurf!</h2>
      <CreateSmurfForm createSmurf={props.createSmurf} />
    </div>
  );
};

const mapStateToProps = state => {
  const { isCreating, creationError } = state;
  return {
    isCreating,
    creationError,
  };
};

export default connect(
  mapStateToProps,
  { createSmurf }
)(SmurfsFormContainer);
