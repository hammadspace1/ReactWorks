import React from "react";
import { Link } from "react-router-dom";

const WhatIsLive = () => {
    return(
        <div>
            <h1 className="LargestH1 pdH1">What is Live?</h1>
            <Link to='https://youtu.be/G64-yM0Bs78'><h1 className="ml540">See an overview of Live</h1></Link>
            <img style={{width: '100%', height: '650px'}} src="https://ableton-production.imgix.net/tours/live/live-12/what-is-live12.jpg?auto=compress%2Cformat&w=1920"></img>
            <div style={{backgroundColor: '#8EFBD8', paddingLeft: '130px', paddingTop: '100px', lineHeight:'80px', paddingBottom: '100px'}}>
                <h1 className="mb100" style={{marginRight: '130px'}}>Live is fast, fluid and flexible software for music creation and performance. It comes with effects, instruments, sounds and all kinds of creative features—everything you need to make any kind of music.

                    Create in a traditional linear arrangement, or improvise without the constraints of a timeline in Live’s Session View. Move freely between musical elements and play with ideas, without stopping the music and without breaking your flow.</h1>
                    <Link><h1 style={{color: 'blueviolet'}}>Try Live 12 free for 30 days</h1></Link>
            </div>
            <h2 className="LargestH1 pl130 mb100">Create with Live</h2>
            <div className="dFlex mb100">
                <div style={{marginLeft: '130px', marginTop: '300px', width: '400px'}}>
                    <h1>Sketch, tweak and experiment</h1>
                    <p>In Live’s Session View you can freely mix and match musical ideas without the constraints of a timeline. Getting ideas down is lightning fast, and it’s the ideal place for improvisation. You can play MIDI and audio loops of different lengths in any combination, without ever stopping the music.</p>
                </div>
                <div style={{marginLeft: '100px'}}>
                    < img style={{width:'900px'}} src="https://ableton-production.imgix.net/live/screenshot-session-view.jpg?auto=compress%2Cformat&w=1024"></img>
                </div>
            </div>
            <div className="dFlex mb100">
            <div style={{marginLeft: '100px'}}>
                    < img style={{width:'900px'}} src="https://ableton-production.imgix.net/live/screenshot-session-view.jpg?auto=compress%2Cformat&w=1024"></img>
                </div>
                <div style={{marginLeft: '130px', marginTop: '300px', width: '400px'}}>
                    <h1>Sketch, tweak and experiment</h1>
                    <p>In Live’s Session View you can freely mix and match musical ideas without the constraints of a timeline. Getting ideas down is lightning fast, and it’s the ideal place for improvisation. You can play MIDI and audio loops of different lengths in any combination, without ever stopping the music.</p>
                </div>
            </div>
        </div>
    );
}

export default WhatIsLive;