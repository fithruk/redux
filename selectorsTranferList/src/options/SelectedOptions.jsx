import React from "react";
import { selectedOptionsSelector } from "./optionSelectors";
import { toggleOption } from "./optionsActionCreators";
import { connect } from "react-redux";

import Options from "./Options";

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
