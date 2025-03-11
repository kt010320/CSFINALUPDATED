import React from 'react';

const navbar = () => 
{
(
  
  <nav className="w-full h-auto bg-gray-800">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default navbar;
