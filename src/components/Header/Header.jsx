import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <h2>Auth</h2>
      <h3>user@mail.com.ua</h3>
      <ul className={css.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
