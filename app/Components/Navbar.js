import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const Navigate = useNavigate();

  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
        <button onClick={() => Navigate('/contact')}>Go to Contact Page</button>
        
    </nav>
  );
};

export default Navbar;



