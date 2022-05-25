import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <p className={classes.logo}>Great Quotes</p>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/all-quotes" activeClassName="active">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-quotes" activeClassName="active">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainNavigation;
