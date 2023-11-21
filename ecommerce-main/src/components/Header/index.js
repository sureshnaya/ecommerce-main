// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <img
      className="header-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <un className="options-coontainer">
      <ul className="nav-menu">
        <Link to="/" className="options">
          <li>Home</li>
        </Link>
        <Link to="/products" className="options">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="options">
          <li>Cart</li>
        </Link>
      </ul>
      <button className="logout-button" type="button">
        Logout
      </button>
    </un>
  </nav>
)
export default Header
