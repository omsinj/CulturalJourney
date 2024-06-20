// src/components/DoorSelection.js

import React from 'react';
import { Link } from 'react-router-dom';

function DoorSelection() {
  return (
    <div>
      <h2>Select a Field</h2>
      <div>
        <Link to="/video/BOLD"><button>BOLD</button></Link>
        <Link to="/video/VETS"><button>VETS</button></Link>
        <Link to="/video/WOTM"><button>WOTM</button></Link>
        <Link to="/video/PRIDE"><button>PRIDE</button></Link>
      </div>
    </div>
  );
}

export default DoorSelection;
