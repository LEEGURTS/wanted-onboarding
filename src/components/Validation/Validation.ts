export const checkEmail = (email: string) => {
  if (email.includes("@")) {
    return true;
  }
  return false;
};

export const checkPassword = (password: string) => {
  if (password.length >= 8) {
    return true;
  }
  return false;
};
