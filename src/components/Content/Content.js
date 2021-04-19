import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { StoreContext } from "../../store/StoreProvider";
import Courses from "../Courses/Courses";

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className="main">
      <Switch>
        <Route path="/" render={() => <Courses />} />
        {isUserLogged && (
          <Route path="/my-courses" render={() => <p>Moje kursy</p>} />
        )}
        {isAdmin && (
          <Route
            path="/manage-courses"
            render={() => <p>Zarządzanie kursami</p>}
          />
        )}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Content;
