import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

const SmurfsContainer = props => {
  const { fetchSmurfs } = props;
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  return (
    <section>
      <h2>All the Smurfs</h2>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsContainer);
