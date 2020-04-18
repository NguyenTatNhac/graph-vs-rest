import React from 'react';
import {Link} from "react-router-dom";

export default () => {

  return (
      <div>
        Hello World...
        <Link to="/err">Error</Link>
      </div>
  );
}
