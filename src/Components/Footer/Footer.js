import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";
import logo from '../../abletonLogo.svg'

const Footer = () => {
    return(
        <div>
            <div className="footerMainInner">
            <h1>Ableton</h1>
            <div className="footerFlex">
                <div className="footerFlex1">
                    <a href="">Register Live or Push</a><br />
                    <a href="">About Ableton</a><br />
                    <a href="">Jobs</a><br />
                    <div className="dFlex pr5">
                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a><br />
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a><br />
                    <a href=""><FontAwesomeIcon icon={faYoutube} /></a><br />
                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a><br />
                    <a href=""><FontAwesomeIcon icon={faTiktok} /></a><br />
                    </div><br />
                    <h3>Community</h3><br />
                    <a href="">find Ableton User Group</a><br />
                    <a href="">Find Certified Training</a><br />
                    <a href="">Become a Certified Trainer</a>
                </div>
                <div className="footerFlex2">
                <h3>Education</h3><br />
                    <a href="">Offers for Students and Teacher </a><br />
                    <a href="">Ableton for the Classrooms</a><br />
                    <a href="">Ableton for Colleges and Universities</a>
                    <h3 style={{marginTop:'50px'}}>Language and Location</h3>
                    <div className="inputSelecter">
                        <select>
                            <option>English</option>
                            <option>URdu</option>
                            <option>Poshto</option>
                            <option>Panjabi</option>
                            <option>Saraiki</option>
                            <option>Bangla</option>
                        </select>
                        <select style={{width:'200px', marginLeft:'10px', }}>
                            <option>Pakistan</option>
                            <option>Bangladesh</option>
                            <option>Srilanka</option>
                            <option>China</option>
                            <option>Japan</option>
                            <option>Afghanistan</option>
                        </select>
                    </div>
                </div>
                <div className="footerFlex3">
                <h3>Sign Up to our NewsLetter</h3><br />
                <h3>Enter your Email Address to stay up to date with the latest offers,</h3><br />
                <h3>tutorials, downloads, surveys and more</h3>
                <div style={{display:'flex'}}>
                <input style={{width:'450px',height:'40px', border:'0px solid black', backgroundColor: 'rgb(183, 188, 183)', marginTop:'20px'}} type="email" placeholder="Email Address" />
                <button style={{width:'100px',height:'42px', border:'0px solid black', backgroundColor: 'blue', color:'white', marginTop:'20px'}}>SighUp</button>
                </div>
                </div>
            </div>
            <div>
                <ul className="footerUl">
                    <li className="footerLi">contact Us</li>
                    <li className="footerLi">Press Resources</li>
                    <li className="footerLi">Legal Info</li>
                    <li className="footerLi">Privacy Policy</li>
                    <li className="footerLi">Cockie Setting</li>
                    <li className="footerLi">Imprint</li>
                    <li className="footerLi extraPadding">Made in Berlin</li>
                    <li className="footerLi"><img src={logo} /></li>
                </ul>
            </div>
            
            </div>
        </div>
    );
}

export default Footer;