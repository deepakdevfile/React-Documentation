import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from "./App0020_c2_Profile_editor";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
