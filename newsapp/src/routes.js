import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Newsapi from './newsapi';
import Article from './article';
import Navbar from './navbar';
import Business from './business';
function Routing() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Newsapi/>}></Route>
            <Route path='/business' element={<Business/>}></Route>
            <Route path='/article' element={<Article/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing