import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3e3,
      refetchOnWindowFocus: import.meta.env.PROD,
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
  <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
