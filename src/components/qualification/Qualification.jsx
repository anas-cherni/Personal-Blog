import React,{useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [ToggleState, setToggleState] = useState(2);
    const toggleTab = (x) => {
        setToggleState(x);
    }
  return (

    <section className="section" id="qualification">
        <h2 className="section__title">My personel journey</h2>
        <span className="section__subtitle"></span>
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
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            
                            <h3 className="qualification__title">Mazars [Company]</h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023-Present
                            </div>
                            <span className="qualification__subtitle"> Application security consultant, Conducting Web and Mobile Pentesting / source code review for international clients.</span>
                            
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">Securinets [Organization] </h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>2022-2023
                            </div>
                            <h4 className="qualification__subtitle-right">Technical Director, charged with delivering cybersecurity content through CTFs and workshops and manage a talented team</h4>
                            
                            
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
                            
                            <h3 className="qualification__title">Intellisec Solutions [Company] </h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 09/2022-12/2022
                            </div>
                            <span className="qualification__subtitle"> Offensive Security Intern <br/>
* Delivered a configuration review on SSO solution<br/>
* Got exposed to different types of offensive engagements (external and internal pentesting).</span>
                            
                            
                        </div>
                    </div>
                    



                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">Association for Computing Machinery [Organization]</h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>April - 2022
                            </div>
                            <h4 className="qualification__subtitle-right">Network System Administration, contributed in creation of local network infrastructure for Competitive Programming contest </h4>
                            
                            
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
                            
                            <h3 className="qualification__title">Junior Entreprise INSAT [Organization] </h3>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021-2022
                            </div>
                            <span className="qualification__subtitle">Head of Marketing Department </span>
                            
                            
                        </div>
                    </div>




                    
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title-right">Bulldozer [Company]</h3>
                            <div className="qualification__calendar-r">
                                <i className="uil uil-calendar-alt"></i>August - 2021
                            </div>
                            <h4 className="qualification__subtitle-right">Front end web development intern, ReactJs Storybook </h4>
                            
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                
                


                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification
