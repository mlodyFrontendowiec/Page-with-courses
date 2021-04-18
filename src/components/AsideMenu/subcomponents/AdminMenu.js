import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => (
  <>
    <p className="aside-menu__title">Panel Administratora</p>
    <nav>
      <ul>
        <li className="aside-menu__link">
          <Link to="/manage-courses">Zarządzanie kursami</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default AdminMenu;
