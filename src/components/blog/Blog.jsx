import React from 'react'
import Card from './Card'

const Blog = () => {
  return (
    <div>
        <section id="Blog" className="section">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">Sharing the most interesting I encounter</span>
        <Card/>
        <div className="mbt">
        <span className="section__subtitle3">More writeups</span>
        <h2 className="section__title">blog.anas-cherni.me</h2>
        <span className="section__subtitle2"><i class="uil uil-corner-down-right"></i><a href="https://blog.anas-cherni.me">Visit</a><i class="uil uil-corner-down-left"></i></span>
        </div>    
        
        </section>     
    </div>
  )
}

export default Blog
