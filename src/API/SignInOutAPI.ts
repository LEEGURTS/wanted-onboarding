import axios from "axios";

const baseAxios = axios.create({
  url: "https://www.pre-onboarding-selection-task.shop",
});

export const sendSignUpRequest = async (email: string, password: string) => {
  return baseAxios.post("/auth/signup", {
    email: email,
    password: password,
  });
};

export const sendSignInResquest = async (email: string, password: string) => {
  return baseAxios.post("/auth/signin", {
    email: email,
    password: password,
  });
};
