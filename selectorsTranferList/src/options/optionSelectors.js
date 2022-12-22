const availableOptionsSelector = (state) => {
  const allOptions = state.options.optionsList;
  return allOptions;
};

const getSelectedOptions = (state) => {
  return state.options.selected;
};

const selectedOptionsSelector = (state) => {
  const allOptions = availableOptionsSelector(state);
  const selectedIds = getSelectedOptions(state);
  const selectedOptions = allOptions.filter((option) =>
    selectedIds.includes(option.id)
  );
  return selectedOptions;
};

const restOptionsSelector = (state) => {
  const allOptions = availableOptionsSelector(state);
  const selectedIds = getSelectedOptions(state);
  const restOptions = allOptions.filter(
    (option) => !selectedIds.includes(option.id)
  );
  return restOptions;
};

export {
  availableOptionsSelector,
  selectedOptionsSelector,
  restOptionsSelector,
};
