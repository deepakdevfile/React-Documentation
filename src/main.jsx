import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from "./App0026_Moving_all_wiring_into_a_single_file";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
