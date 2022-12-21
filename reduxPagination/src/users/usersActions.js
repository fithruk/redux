const nextPage = () => {
  return {
    type: "NEXT_PAGE",
  };
};

const prevPage = () => {
  return {
    type: "PREV_PAGE",
  };
};

export { nextPage, prevPage };
