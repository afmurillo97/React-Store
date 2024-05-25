import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/Clothes'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/Electronics'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/Furnitures'>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/Toys'>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/Others'>
            Others
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          afmurillo97@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li>
          CC 0
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;