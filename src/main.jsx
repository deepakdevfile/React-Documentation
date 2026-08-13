import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from "./App0020_Reacting_to_Input_with_State";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
