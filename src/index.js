import { createRoot } from "react-dom/client"
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import React from "react"
const root = document.getElementById('root')

const app = createRoot(root)
app.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)