import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RepositoriesProvider } from "../context/repositories";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RepositoriesProvider>
        <Component {...pageProps} />
      </RepositoriesProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
