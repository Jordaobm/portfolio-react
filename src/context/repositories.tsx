import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { getRepositories } from "../services/Repositories";

interface Repository {
  id: number;
  html_url: string;
  language: string;
  name: string;
  description: string;
  forks: number;
  watchers: number;
}

interface RepositoriesContext {
  repositories: Repository[];
}

const repositoriesContext = createContext({} as RepositoriesContext);

interface RepositoriesProvider {
  children: ReactNode;
}

export const RepositoriesProvider = ({ children }: RepositoriesProvider) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {}, []);

  useQuery(["repositories"], () => getRepositories(), {
    onSuccess: ({ data }) => {
      setRepositories(data);
    },
    onError: (error) => {
      console.log(error);
    },
    cacheTime: 5 * 60 * 1000, // 5 minutos
    staleTime: Infinity,
  });

  return (
    <repositoriesContext.Provider value={{ repositories }}>
      {children}
    </repositoriesContext.Provider>
  );
};

export const useRepositories = (): RepositoriesContext => {
  return useContext(repositoriesContext);
};
