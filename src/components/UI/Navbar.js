import { Link } from 'react-router-dom';
import React from 'react';
import Icons from './icons.svg';

const Navbar = () => (
  <nav className="flex w-full justify-between font-mono items-center p-3 drop-shadow-md h-20 bg-white">
    <Link to="/" className="text-2xl font-bold ml-16 text-blue-600">
      Bookstore CMS
    </Link>
    <ul className="flex font-thin">
      <li className="mr-4">
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <div className="user_icon mr-16 p-2 rounded-full border-2 border-black">
      <svg className="fill-blue-400 w-5 h-5">
        <use xlinkHref={`${Icons}#icon-user`} />
      </svg>
    </div>
  </nav>
);

export default Navbar;
