import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntersectionObserver from './components/IntersectionObserver.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/intersection-observer' element={<IntersectionObserver />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
