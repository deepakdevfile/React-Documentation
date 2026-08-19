import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from "./App0030_c4_Fix_fetching_inside_an_Effect";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
