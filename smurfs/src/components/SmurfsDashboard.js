import React from 'react';
import styled from 'styled-components';

import SmurfsContainer from './SmurfsContainer';

const StyledSmurfWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SmurfsDashboard = () => {
  return (
    <section>
      <h1>Redux Smurf Village</h1>
      <StyledSmurfWrapper>
        <div>create smurf form goes here</div>
        <SmurfsContainer />
      </StyledSmurfWrapper>
    </section>
  );
};

export default SmurfsDashboard;
