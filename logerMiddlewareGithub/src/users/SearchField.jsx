import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchUserData } from "./usersActions";

const SearchField = ({ fetchUserData }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <div className="name-form">
      <input
        type="text"
        value={textValue}
        className="name-form__input"
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button
        className="name-form__btn btn"
        onClick={() => fetchUserData(textValue)}
      >
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
