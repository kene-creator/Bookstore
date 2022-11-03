import React from 'react';

const Card = (props) => (
  <div className="center_helper w-full p-1 flex justify-center align-center">
    {props.children}
  </div>
);
export default Card;
