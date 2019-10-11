import React from 'react';
import styled from 'styled-components';

import SmurfsContainer from './SmurfsContainer';
import SmurfsFormContainer from './SmurfsFormContainer';

const StyledSmurfWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  h1 {
    grid-column: 1 / span 2;
    font-size: 7vmin;
    padding-left: 20px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SmurfsDashboard = () => {
  return (
    <section>
      <StyledSmurfWrapper>
        <h1>Redux Smurf Village</h1>
        <SmurfsFormContainer />
        <SmurfsContainer />
      </StyledSmurfWrapper>
    </section>
  );
};

export default SmurfsDashboard;
