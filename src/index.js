import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InputProvider } from "./context/inputContext";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);