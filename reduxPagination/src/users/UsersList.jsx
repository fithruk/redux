import React from "react";
import { connect } from "react-redux";

import User from "./User";
import Pagination from "./Pagination";
import { nextPage, prevPage } from "./usersActions";

const UsersList = ({ users, currentPage, nextPage, prevPage }) => {
  const itemsPerPage = 3;
  const displayElems = (page, arr) => {
    let start = page * itemsPerPage;
    let end = start + itemsPerPage;
    return arr.slice(start, end);
  };

  const displayedArr = displayElems(currentPage, users);

  return (
    <>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {displayedArr.map((user) => (
          <User {...user} key={user.name} />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  nextPage,
  prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
