import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RepositoriesProvider } from "../context/repositories";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RepositoriesProvider>
        <Component {...pageProps} />
      </RepositoriesProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
