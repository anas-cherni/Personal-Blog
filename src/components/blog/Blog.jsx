import React from 'react'
import Card from './Card'

const Blog = () => {
  return (
    <div>
        <section id="Blog" className="section">
        <h2 className="section__title">Blog</h2>
        <Card/>
        <Card/>
        <Card/>
        <h2 className="section__title">More writeups</h2>
        <h2 className="section__title">blog.anas-cherni.me</h2>
        <span className="section__subtitle"><i class="uil uil-corner-down-right"></i><a href="https://blog.anas-cherni.me">Visit</a><i class="uil uil-corner-down-left"></i></span>
            
        
        </section>     
    </div>
  )
}

export default Blog
