import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Blog from './components/blog/Blog'
const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Blog />

      </main>
    </div>
  )
}

export default App
