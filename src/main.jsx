import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from "./App0023_c5_Fix_misplaced_state_in_the_list";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
