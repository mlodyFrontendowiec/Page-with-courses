import React, { useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";
import AdminMenu from "./subcomponents/AdminMenu";
import UserMenu from "./subcomponents/UserMenu";

const ADMIN_TYPE = 1;

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null;

  return (
    <section className="aside-menu">
      <UserMenu isUserLogged={Boolean(user)} />
      {adminMenuComponent}
    </section>
  );
};

export default AsideMenu;
