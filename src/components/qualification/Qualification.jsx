import React,{useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [ToggleState, setToggleState] = useState(2);
    const toggleTab = (x) => {
        setToggleState(x);
    }
  return (

    <section className="section" id="qualification">
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div className={ToggleState === 1 ? "qualification__button qualification__active button--flex" : "button--flex qualification__button"}  onClick={() => toggleTab(1)} >
                    <i className="uil uil-graduation-cap"></i>Education
                </div>

                <div className={ToggleState === 2 ? "qualification__button qualification__active button--flex" : "button--flex qualification__button"}  onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt"></i>Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div className={ToggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">National Institute of Applied Science and Technology</h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>2020 - 2025
                            </div>
                            <h4 className="qualification__subtitle-right">Network Engineering </h4>
                            
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            
                            <h3 className="qualification__title">Bourguiba Pionner High School, Tunis</h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2016 - 2020
                            </div>
                            <span className="qualification__subtitle">National baccalaureate 16.64/20 </span>
                            
                            
                        </div>
                    </div>
                
                


                </div>
                    
                    <div className={ToggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">Securinets</h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>2022-2023
                            </div>
                            <h4 className="qualification__subtitle-right">Technical Director, charged with delivering cybersecurity content through CTFs and workshops</h4>
                            
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            
                            <h3 className="qualification__title">Association for Computing Machinery</h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>April - 2022
                            </div>
                            <span className="qualification__subtitle">Network System Administration, contributed in creation of local network infrastructure for Competitive Programming contest </span>
                            
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">Junior Entreprise INSAT</h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>2021-2022
                            </div>
                            <h4 className="qualification__subtitle-right">Head of Marketing Department</h4>
                            
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            
                            <h3 className="qualification__title">Bulldozer </h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>August - 2021
                            </div>
                            <span className="qualification__subtitle">Front end web development intern, ReactJs Storybook  </span>
                            
                            
                        </div>
                    </div>
                
                


                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification
