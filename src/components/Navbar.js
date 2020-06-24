import React from 'react';

const NavBar = () => (
  <div className="app">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand text-primary font-weight-bolder" href="/">LibStore CMS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#books">Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#categories">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
