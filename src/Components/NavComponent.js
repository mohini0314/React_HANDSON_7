import React from 'react';
import './nav_comp.css';
import { Link } from 'react-router-dom';

function NavComponent() {
  return (
    <navbar>
        <div className="container">
            <ul>
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/Student">Student</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </navbar>
  )
}

export default NavComponent
