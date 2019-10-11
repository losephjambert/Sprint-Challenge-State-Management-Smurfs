import React from 'react';
import SmurfsContainer from './SmurfsContainer';

const SmurfsDashboard = () => {
  return (
    <section>
      <h1>Redux Smurf Village</h1>
      <div>create smurf form goes here</div>
      <div>
        <SmurfsContainer />
      </div>
    </section>
  );
};

export default SmurfsDashboard;
