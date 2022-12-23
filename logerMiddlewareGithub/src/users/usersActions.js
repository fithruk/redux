import { getUserData } from "../apiWays";

const toggleSpiner = () => {
  return {
    type: "TOGGLE_SPINNER",
  };
};

const setUserData = (userData) => {
  return {
    type: "SET_USER",
    payload: userData,
  };
};

const fetchUserData = (userName) => {
  return async function (dispatch) {
    dispatch(toggleSpiner());
    const loadedUserData = await getUserData(userName);
    dispatch(toggleSpiner());
    dispatch(setUserData(loadedUserData));
  };
};

export { setUserData, toggleSpiner, fetchUserData };
