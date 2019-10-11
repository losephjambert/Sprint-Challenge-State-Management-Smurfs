import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

import SmurfCard from './Smurfcard';

const SmurfsContainer = ({ fetchSmurfs, error, isFetching, smurfsList }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <section>
      <h2>All the Smurfs</h2>
      <ul>
        {smurfsList.map(smurf => (
          <SmurfCard key={smurf.id} {...smurf} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = state => {
  const { smurfs } = state;
  return {
    ...smurfs,
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsContainer);
