import React from 'react';
import styled from 'styled-components';

const StyledSmurfCardWrapper = styled.figure`
  margin: 0;
  margin-bottom: 35px;
  padding: 15px;
  max-width: 320px;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 9px 0 ghostwhite, 0 0 3px 0 blue, 0 0 5px 0 blue, 0 0 7px 0 blue, 0 0 9px 0 blue;
  }

  h3 {
  }
`;

const StyledDeleteButton = styled.button`
  background-color: ghostwhite;
  color: black;
  box-shadow: 0px 0px 0 0 blue;
  border: 3px solid black;
  padding: 8px 20px;
  font-size: 1rem;
  margin: 20px 0;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 6px 6px 0 0 blue;
  }
`;

const SmurfCard = ({ age, height, id, name, deleteSmurf }) => (
  <StyledSmurfCardWrapper>
    <h3>{name}</h3>
    <h4>
      <span>{age} years old</span> and <span>{height} tall</span>
    </h4>
    <StyledDeleteButton onClick={() => deleteSmurf(id)}>{`Delete ${name}`}</StyledDeleteButton>
  </StyledSmurfCardWrapper>
);

export default SmurfCard;
