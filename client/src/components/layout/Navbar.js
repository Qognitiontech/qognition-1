import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
      <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
        </li>
      <li>
        <Link to="/posts">
          <i className="fas fa-syringe" />{' '}
          <span className="hide-sm">Immunization</span>
        </Link>
      </li>
      <li>
        <Link to="/allergies">
          <i className="fas fa-allergies" />{' '}
          <span className="hide-sm">Allergies</span>
        </Link>
      </li>
      <li>
        {/* <Link to="/immunize">
          <i className="fas fa-syringe" />{' '}
          <span className="hide-sm">Immunization</span>
        </Link> */}
        <Link to="/profile/60c49e1a76125a3ec062f2c5">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Proffesionals? See our Prices</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-brain" /> Qognition
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
