import React from 'react';
import Keys from './Keys';
import './Calculate.css';

function Calculate() {
  return (
    <div className="Calculate">
      <input type="number" /><br />
      <Keys />
    </div>
  );
}

export default Calculate;
