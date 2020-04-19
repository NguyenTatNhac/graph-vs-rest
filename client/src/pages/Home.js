import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Hello World. Welcome to my home page!</h1>
      <h2>
        <Link to="/err">Error</Link>
      </h2>
    </div>
  );
};
