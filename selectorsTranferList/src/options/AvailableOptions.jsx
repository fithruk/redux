import React from "react";
import { restOptionsSelector } from "./optionSelectors";
import { toggleOption } from "./optionsActionCreators";
import { connect } from "react-redux";

import Options from "./Options";

const mapState = (state) => {
  return {
    options: restOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
