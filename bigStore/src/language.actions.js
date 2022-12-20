const setLanguage = (lang) => {
  return {
    type: "SET_LANGUAGE",
    payload: lang,
  };
};

export { setLanguage };
