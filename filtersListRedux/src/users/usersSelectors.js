const userSelector = (state) => {
  const AllUsers = state.users.usersList;
  return AllUsers;
};

const filteredTextSelector = (state) => {
  const text = state.users.filterText;
  return text;
};

const filteredUsersSelector = (state) => {
  const allUsers = userSelector(state);
  const text = filteredTextSelector(state);
  const newUsersArr = allUsers.filter(
    (user) => user.name.toLowerCase().indexOf(text.toLowerCase()) > -1
  );
  return newUsersArr.length > 0 ? newUsersArr : allUsers;
};

export { userSelector, filteredTextSelector, filteredUsersSelector };
