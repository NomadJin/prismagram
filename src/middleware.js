export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("You neeed to log in to perform this action");
  }
  return;
};
