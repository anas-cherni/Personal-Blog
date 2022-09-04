import React from 'react'
import "./skills.css"
import GoodAt from './GoodAt'
import Exploring from './Exploring'

const Skills = () => {
  return (
    <section className="skills section" id="Skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical Skills</span>

        <div className="skills__container container grid">
            <GoodAt/>
            <Exploring/>
        </div>
    </section>
  )
}

export default Skills
