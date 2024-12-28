import './navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { Handle } = props;

  return (
    <header>
      <div className='landing-page'>
        <div className="navbar">
          <Link to="land">
            <div className="nav-logo border">
              <div className="mainlogo"></div>
            </div>
          </Link>

          {/* Hamburger icon to open sidebar */}

          {/* Rest of Navbar content remains the same */}
          <div className="nav-address border">
            <div className="add-icon">
              <pre><i className="fa-solid fa-location-dot"></i><p className="add-sec">{props.city}</p></pre>
            </div>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Farm-Connect"
              className="search-input"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-signin border">
            <p><span className='signInClick' onClick={Handle}>Hello, {props.signInfo} </span></p>
            <p>{props.name}</p>
            <p className="nav-second">Accounts</p>
          </div>
        </div>
      </div>

      {/* Add the Slidebar component here */}
    </header>
  );
}

Navbar.propTypes = {
  city: PropTypes.string,
  signInfo: PropTypes.string,
  name: PropTypes.string,
  Handle: PropTypes.func,

};
