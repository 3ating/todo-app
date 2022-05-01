import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from "./components/demo.jsx"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<div id='button'>
    <StyledEngineProvider injectFirst class="center start" >
      <Demo />
    </StyledEngineProvider>
    </div>

  
    <App />
  </React.StrictMode>,
    // document.getElementById('root')

);

reportWebVitals();
