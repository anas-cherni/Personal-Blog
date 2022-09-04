import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <Skills />
      </main>
    </div>
  )
}

export default App
