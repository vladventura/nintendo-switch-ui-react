import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InputProvider } from "./context/inputContext";

ReactDOM.render(
  <React.StrictMode>
    <InputProvider>
      <App />
    </InputProvider>
  </React.StrictMode>,
  document.getElementById('root')
);