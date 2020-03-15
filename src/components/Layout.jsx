import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';

const Layout = ({ children }) => (
  <div className='App'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/hello'>Hello World</Link>
      </li>
    </ul>
    {children}
  </div>
);

export default Layout;
