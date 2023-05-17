import axios from "axios";
import { TodoState } from "../components/Home/TodoContext";

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

export const sendCreateTodoRequest = async (content: { todo: string }) => {
  return baseAxios.post("/todos", content, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const sendGetTodoRequest = async () => {
  return baseAxios.get("/todos", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const sendUpdateTodoRequest = async (
  id: number,
  content: { todo: string; isCompleted: boolean }
) => {
  return baseAxios.put(`/todos/${id}`, content, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const sendDeleteTodoRequest = async (id: number) => {
  return baseAxios.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
