import React from 'react';

const SmurfCard = ({ age, height, id, name }) => (
  <li>
    <figure>
      <h3>{name}</h3>
      <h4>
        <span>{age} years old</span> and <span>{height} tall</span>
      </h4>
    </figure>
  </li>
);

export default SmurfCard;
