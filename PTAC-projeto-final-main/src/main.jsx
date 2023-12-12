import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Cadastrar from './Cadastrar.jsx'
import Video from './video.jsx'
import Destaque from './Destaque.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
        <Route path="/video/:id" element={<Video/>}></Route>
        <Route path="/destaque" element={<Destaque/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
