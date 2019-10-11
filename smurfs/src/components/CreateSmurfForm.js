import React, { useState } from 'react';

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
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const { name, age, height } = formState;
  return (
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
  );
};

export default CreateSmurfForm;
