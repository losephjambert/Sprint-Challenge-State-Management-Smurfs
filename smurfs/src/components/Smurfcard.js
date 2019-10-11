import React from 'react';

const SmurfCard = ({ age, height, id, name, deleteSmurf }) => (
  <li>
    <figure>
      <h3>{name}</h3>
      <h4>
        <span>{age} years old</span> and <span>{height} tall</span>
      </h4>
      <input type='button' value={`Delete ${name}`} onClick={() => deleteSmurf(id)} />
    </figure>
  </li>
);

export default SmurfCard;
