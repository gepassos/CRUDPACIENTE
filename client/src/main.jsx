import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CreatePost from './CreatePost'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Posts from "./Posts"

ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/create" element={<CreatePost />}></Route>
      <Route path="/create/posts" element={<Posts />}></Route>
    </Routes>
  </BrowserRouter>
)
