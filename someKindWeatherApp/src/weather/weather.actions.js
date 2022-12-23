import { fetchWeatherData } from "../apiWays";

const setWeatherData = (weatherData) => {
  return {
    type: "SET_DATA",
    payload: weatherData,
  };
};

const getWeatherData = (arr) => {
  return async function (dispatch) {
    const loadedWeatherData = await fetchWeatherData();
    dispatch(setWeatherData(loadedWeatherData));
  };
};

export { setWeatherData, getWeatherData };
