const link = "https://api.github.com/users/";

const getUserData = async (userName) => {
  const res = await fetch(`${link}${userName}`);

  return res.ok && res.json();
};

export { getUserData };
