import React from "react";
import { Link } from "react-router-dom";

const More = () => {
    return(
        <div style={{marginLeft:'40px',marginTop:'30px'}}>
            <h1>More on Ableton.com:</h1>
            <div className="dFlex ">
                <Link ><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Blog</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Ableton for the Classroom</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Ableton for Colleges and Universities</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Certified Training</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>About Ableton</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Jobs</h3></Link>
                <Link><h3 style={{fontWeight:'400', marginRight:'30px',display:'inline-block',textDecoration:'none'}}>Apprenticeships</h3></Link>

            </div>
            <div>
                <h1>More from Ableton:</h1>
                <div className="dFlex">
                    <div style={{width:'400px'}}>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Loop</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Watch Talks, Performances and Features</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>from Ableton's Summit for Music Makers</h3></Link>
                    </div>
                    <div style={{width:'400px', marginLeft:'80px'}}>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Loop</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Watch Talks, Performances and Features</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>from Ableton's Summit for Music Makers</h3></Link>
                    </div>
                    <div style={{width:'400px', marginLeft:'80px'}}>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Loop</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Watch Talks, Performances and Features</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>from Ableton's Summit for Music Makers</h3></Link>
                    </div>
                    <div style={{width:'400px', marginLeft:'80px'}}>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Loop</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>Watch Talks, Performances and Features</h3></Link><br/>
                        <Link><h3 style={{fontWeight:'400',display:'inline-block',textDecoration:'none'}}>from Ableton's Summit for Music Makers</h3></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default More;