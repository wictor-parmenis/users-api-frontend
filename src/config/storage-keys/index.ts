const authPrefix = "@Auth";
const storageKeys = {
  AUTH: {
    USER_DATA: `${authPrefix}:loggedUser`,
    USER_TOKENS: `${authPrefix}:UserTokens`,
  },
};

export { authPrefix, storageKeys };
