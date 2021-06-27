import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <i className='fas fa-user-friends'></i> {"   "}Zingle
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/explore'>
                Explore
                <span className='visually-hidden'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
