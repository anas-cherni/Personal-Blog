import React from 'react'
import Image from "../../assets/img.webp"

const Exploring = () => {
  return (
   <div className="skills__content">
       <h3 className="underscore1">___________________</h3>
        <h3 className="skills__title typewriter">I'am EXPLORING</h3>
        <h3 className="underscore">___________________</h3>

        <div className="skills__box">
            <div className="skills_group">
                <div className="skills__data">
                    <i class="uil uil-processor"></i>
                    

                    <div>
                        <h3 className="skills__name">Reversing Binaries</h3>
                        
                    </div>
                </div>

                    <div className="skills__data">
                    <i class="uil uil-setting"></i>


                    <div>
                        <h3 className="skills__name">Operational Technology penetration testing</h3>
                    </div>
                </div>


                    <div className="skills__data">
                    <i class="uil uil-desktop"></i>

                    <div>
                        <h3 className="skills__name">Linux / windows machine pentesting</h3>
                    </div>
                </div>

                <img src={Image} alt="routine" className="gif"></img>
            </div>
        </div>
    </div>
  )
}

export default Exploring
