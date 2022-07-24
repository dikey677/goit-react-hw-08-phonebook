const getIsLoggedIn = (state) => state.auth.getIsLoggedIn;

const getUserName = (state) => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
