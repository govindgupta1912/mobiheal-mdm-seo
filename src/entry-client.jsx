import './index.css';
import { hydrateRoot } from 'react-dom/client';


import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/ui/theme-provider";

import App from './App';

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="securemdm-ui-theme">

    <App />
    </ThemeProvider>
</BrowserRouter>
 
);