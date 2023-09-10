import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'
import  RecommendedVideos from './RecommendedVideos'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
            <Header />
      <div className="app__page">
            <Sidebar/>
        <Routes>
          <Route exact path="/search/:searchTerm" element={<SearchPage/>}/>
          <Route exact path="/"  element={<RecommendedVideos/>} />
        </Routes>
      </div>
      </Router>
   
         
      
    </div>
  )
}

export default App
