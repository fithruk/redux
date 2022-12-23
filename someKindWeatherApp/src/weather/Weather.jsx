import React, { useEffect } from "react";
import { connect } from "react-redux";

import { citiesSelector } from "./weaterSelectors";
import { getWeatherData } from "./weather.actions";

const Weather = ({ cities, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map((city) => (
          <City {...city} key={city.id} />
        ))}
      </ul>
    </main>
  );
};

const City = ({ name, temperature }) => {
  return (
    <li className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{temperature}</span>
    </li>
  );
};

const mapState = (state) => {
  return {
    cities: citiesSelector(state),
  };
};

const mapDispatch = {
  getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
