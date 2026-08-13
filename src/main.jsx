import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from '';
// replace the single quotes in above line to the file which you want to run 

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
