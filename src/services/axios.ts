import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_GITHUB_API,
});

export const endpoints = {
  repositories: "/users/Jordaobm/repos",
};
