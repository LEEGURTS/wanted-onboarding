import axios from "axios";

export const sendSignUpRequest = async (email: string, password: string) => {
  return axios.post("/auth/signup", {
    email: email,
    password: password,
  });
};

export const sendSignInResquest = async (email: string, password: string) => {
  return axios.post("/auth/signin", {
    email: email,
    password: password,
  });
};
