import React from 'react';

const ArrowNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px',
        borderRadius: '50%',
        color: 'black',
        background: 'white',
      }}
      onClick={onClick}
    />
  );
};

export default ArrowNext;
