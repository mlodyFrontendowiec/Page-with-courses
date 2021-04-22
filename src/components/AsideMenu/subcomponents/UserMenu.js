import React from "react";
import { Link } from "react-router-dom";

const UserMenu = ({ isUserLogged }) => (
  <>
    <p className="aside-menu__title">User panel </p>
    <nav>
      <ul className="aside-menu__list">
        <li className="aside-menu__link">
          <Link to="/" className="aside-menu__link">
            Available courses
          </Link>
        </li>
        {isUserLogged && (
          <li>
            <Link to="/my-courses" className="aside-menu__link">
              My courses
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </>
);

export default UserMenu;
