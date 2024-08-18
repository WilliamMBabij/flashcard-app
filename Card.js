import React from 'react';

const Card = ({ question, answer }) => {
  return (
    <div style={{ padding: 20, border: '1px solid black' }}>
      <div>{question}</div>
      <hr />
      <div>{answer}</div>
    </div>
  );
};

export default Card;
