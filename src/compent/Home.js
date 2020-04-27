import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div>
      <Link to = "/node">
      <h1>Welcome to VideoPlayer</h1>
      </Link>
    </div>
  );
}

export default Home;
