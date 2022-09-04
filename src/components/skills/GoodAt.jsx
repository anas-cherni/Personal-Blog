import React from 'react'

const GoodAt = () => {
  return (
    <div className="skills__content">
        <h3 className="underscore1">___________________</h3>
        <h3 className="skills__title typewriter">I'am GOOD at</h3>
        <h3 className="underscore">___________________</h3>

        <div className="skills__box">
            <div className="skills_group">
                <div className="skills__data">
                    <i class="uil uil-lock-access"></i>

                    <div>
                        <h3 className="skills__name">Web App penetration testing</h3>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">API testing</span><br/>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">Code auditing</span><br/>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">Config review</span><br/>
                    </div>
                </div>

                    <div className="skills__data">
                    <i class="uil uil-window"></i>

                    <div>
                        <h3 className="skills__name">Full stack web development</h3>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">MERN stack</span><br/>
                    </div>
                </div>


                    <div className="skills__data">
                    <i class="uil uil-search-alt"></i>

                    <div>
                        <h3 className="skills__name">Memory forensics</h3>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">Windows memory dump</span><br/>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">Linux memory dump</span><br/>
                    </div>
                </div>

                 <div className="skills__data">
                    <i class="uil uil-server-network"></i>

                    <div>
                        <h3 className="skills__name">Network Analysis</h3>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">PCAP analysis</span><br/>
                        <i class="uil uil-angle-right-b"></i>
                        <span className="skills__level">Log analysis</span><br/>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default GoodAt
