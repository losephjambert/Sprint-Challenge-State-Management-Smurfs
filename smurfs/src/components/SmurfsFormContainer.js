import React from 'react';
import { connect } from 'react-redux';

import { createSmurf } from '../actions';

import CreateSmurfForm from './CreateSmurfForm';

const SmurfsFormContainer = props => {
  return <CreateSmurfForm createSmurf={props.createSmurf} />;
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
