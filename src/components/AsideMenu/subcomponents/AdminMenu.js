import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => (
  <>
    <p className="aside-menu__title">Admin panel</p>
    <nav>
      <ul>
        <li className="aside-menu__link">
          <Link
            to="/manage-courses"
            style={{ textDecoration: "none", color: "black" }}
          >
            Courses management
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default AdminMenu;
