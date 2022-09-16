import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './Router';
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <RouterConfig></RouterConfig>
    </BrowserRouter>
  );
}
export default App;
