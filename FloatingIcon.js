import React from 'react';

const FloatingIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ position: 'absolute', top: 10, left: 10 }}>
      <span>🔧</span>
    </div>
  );
};

export default FloatingIcon;
