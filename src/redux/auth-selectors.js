const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingUser = state => state.auth.isFetchingCurrentUser;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingUser,
};
export default authSelectors;
