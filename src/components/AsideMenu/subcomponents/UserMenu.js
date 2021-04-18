import React from "react";
import { Link } from "react-router-dom";

const UserMenu = ({ isUserLogged }) => (
  <>
    <p className="aside-menu__title">Panel użytkownika </p>
    <nav>
      <ul className="aside-menu__list">
        <li className="aside-menu__link">
          <Link to="/" className="aside-menu__link">
            Kursy w sprzedaży
          </Link>
        </li>
        {isUserLogged && (
          <li>
            <Link to="/my-courses" className="aside-menu__link">
              Moje zakupuione kursy
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </>
);

export default UserMenu;
