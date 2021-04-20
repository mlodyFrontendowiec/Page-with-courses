import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { StoreContext } from "../../store/StoreProvider";
import AdminPanel from "../AdminPanel/AdminPanel";
import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className="main">
      <Switch>
        <Route path="/" exact render={() => <Courses />} />
        {isUserLogged && (
          <Route path="/my-courses" exact render={() => <UserCourses />} />
        )}
        {isAdmin && (
          <Route exact path="/manage-courses" render={() => <AdminPanel />} />
        )}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Content;
