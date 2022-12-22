import React from "react";
import User from "./User";
import Filter from "../Filter";
import { filteredTextSelector, filteredUsersSelector } from "./usersSelectors";
import { typingText } from "./userActions";

import { connect } from "react-redux";

const UsersList = ({ users, filterText, onChange }) => {
  return (
    <>
      <Filter
        filterText={filterText}
        count={users.length}
        onChange={onChange}
      />
      <ul className="users">
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    users: filteredUsersSelector(state),
    filterText: filteredTextSelector(state),
  };
};

const mapDispatch = {
  onChange: typingText,
};

export default connect(mapState, mapDispatch)(UsersList);
