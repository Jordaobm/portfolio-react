import { api, endpoints } from "./axios";

export const getRepositories = () => {
  return api.get(endpoints.repositories);
};
