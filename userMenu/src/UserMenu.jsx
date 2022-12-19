import React, { useContext } from "react";
import { userContext } from "./context";

const UserMenu = () => {
  const { name, avatar_url } = useContext(userContext);
  return (
    <div className="menu">
      <span className="menu__greeting">Hello, {name}</span>
      <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
