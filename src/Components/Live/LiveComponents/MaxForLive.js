import React from "react";
import { Link } from "react-router-dom";

const MaxForLive = () => {
    return(
        <div>
        <h1 className="LargestH1 pdH1">Max for Live</h1>
        <Link to='https://www.youtube.com/watch?v=aGrifWA5gq4'><h1 className="ml540">What is Max for Live?</h1></Link>
        <img style={{width: '100%', height: '650px'}} src="https://ableton-production.imgix.net/live/creation-space-front-8.jpg?auto=compress%2Cformat&w=1920"></img>
        <div style={{backgroundColor: '#FEBF88', paddingLeft: '130px', paddingTop: '100px', lineHeight:'80px', paddingBottom: '100px'}}>
            <h1 className="mb100" style={{marginRight: '130px'}}>Max for Live powers a range of instruments and effects included in Live. A vibrant community has produced a vast and constantly growing world of devices that expand Live’s functionality. And for those who want to go further, Max for Live lets you customize devices or even create your own from scratch.</h1>
        </div>
        <h2 className="LargestH1 pl130 mb100">Design your system</h2>
        <div className="dFlex mb100">
            <div style={{marginLeft: '130px', marginTop: '300px', width: '400px'}}>
                <h1>Create and customize</h1>
                <p>Max for Live is a platform to build your own instruments and effects, tools for live performance and visuals, and much more. You can open up any of Live’s Max devices, see how they’re built, and change them to meet your needs. You can build your own from scratch using the same components. And you can even use Max to change the way Live works, including the properties of tracks, clips and scenes.</p>
            </div>
            <div style={{marginLeft: '100px'}}>
                < img style={{width:'900px'}} src="https://ableton-production.imgix.net/live/screenshot-max-for-live-editing.jpg?auto=compress%2Cformat&w=1024"></img>
            </div>
        </div>
        <div className="dFlex mb100">
        <div style={{marginLeft: '100px'}}>
                < img style={{width:'900px'}} src="https://ableton-production.imgix.net/live/poster-connection-kit.jpg?auto=compress%2Cformat&w=1260"></img>
            </div>
            <div style={{marginLeft: '130px', marginTop: '300px', width: '400px'}}>
                <h1>Extend Live</h1>
                <p>Max for Live can completely change how Live interacts with all things external. Reconfigure connections to hardware controllers & synthesizers. Route audio to multiple sets of speakers from your Live project. Use Live to control physical objects like motors and lights using Arduino, OSC and other technologies—there are infinite possibilities for connection and control between Live and the world surrounding it.</p>
            </div>
        </div>
    </div>
    );
}

export default MaxForLive;