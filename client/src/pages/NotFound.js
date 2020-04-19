import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404 Ryker Not Found</h1>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </>
  );
}
