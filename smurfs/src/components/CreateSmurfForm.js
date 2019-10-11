import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  padding: 10px;

  form {
    input {
      border: none;
      outline: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    label {
      margin-bottom: 5px;
      margin-left: 10px;
    }
    input {
      border: none;
      outline: none;
      padding: 10px 8px;
      margin: 10px;
      border: 3px solid black;
      background-color: rgba(0, 0, 255, 0.1);
      max-width: 200px;
      &:focus {
        box-shadow: 6px 6px 0 0 blue;
      }
    }
  }

  input[type='submit'] {
    background-color: ghostwhite;
    color: black;
    box-shadow: 0px 0px 0 0 blue;
    border: 3px solid black;
    padding: 8px 20px;
    font-size: 1rem;
    margin-top: 20px;
    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: 6px 6px 0 0 blue;
    }
  }
`;

const initialFormState = {
  name: '',
  age: '',
  height: '',
};

const CreateSmurfForm = props => {
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (e, smurfToCreate) => {
    e.preventDefault();
    props.createSmurf(smurfToCreate);
    setFormState(initialFormState);
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const { name, age, height } = formState;
  return (
    <StyledFormWrapper>
      <form onSubmit={e => handleSubmit(e, formState)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleChange} type='text' id='name' name='name' value={name} />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input onChange={handleChange} type='text' id='age' name='age' value={age} />
        </div>
        <div>
          <label htmlFor='height'>Height</label>
          <input onChange={handleChange} type='text' id='height' name='height' value={height} />
        </div>
        <input type='submit' value='Create Smurf' />
      </form>
    </StyledFormWrapper>
  );
};

export default CreateSmurfForm;
