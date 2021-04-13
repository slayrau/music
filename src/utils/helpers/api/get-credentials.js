export default (thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;

  return {
    headers: {
      Accept: 'application/json',
      Authorization: `${tokenType} ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
};
