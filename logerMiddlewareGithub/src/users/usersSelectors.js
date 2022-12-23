const userDataSelector = (state) => {
  return state.users.userData;
};

const isFetchingSelector = (state) => {
  return state.users.isFetching;
};

export { userDataSelector, isFetchingSelector };
