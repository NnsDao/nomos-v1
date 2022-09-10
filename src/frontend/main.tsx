import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserStoreProvider } from './hooks/userStore';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3e3,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

(window as any).global = window;
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <QueryClientProvider client={queryClient}>
        <UserStoreProvider>
          <App />
        </UserStoreProvider>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
