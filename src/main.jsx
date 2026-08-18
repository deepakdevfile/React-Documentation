import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from "./App0027_Reusing_logic_with_custom_Hooks";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
