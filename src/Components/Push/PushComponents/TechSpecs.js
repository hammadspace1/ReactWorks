import React from "react";
import { Link } from "react-router-dom";

const TechSpecs = () => {
    return(
        <div>
            <div className="ml130">
            <h1 style={{lineHeight: '70px', marginRight: '130px',marginTop: '100px'}}>Live 12 comes in three editions: Intro, Standard and Suite. They share common features, but Standard and Suite have additional features, instruments, effects, and Packs.</h1>
                <div className="dFlex mb100" >
                Jump to: <Link style={{paddingRight: '20px', color: 'blue'}}>New features in Live 12</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Setup</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Interface</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Instruments & Effects</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Workflows</Link>
                </div>
        </div>
        <div style={{ margin: '0px', padding: '0px'}}>
            <img style={{width: '100%'}} src="https://ableton-production.imgix.net/tours/push/push-3/Tech-specs-1-4800x2700.jpg?auto=compress%2Cformat&w=1920"></img>
        </div>
        <div style={{backgroundColor: '#5C4FD8', color: 'white', paddingBottom: '100px'}} >
            <div className="ml130">
            <h1 style={{margin: '-4px 0 21px 0', paddingTop: '100px'}}>Inputs and outputs</h1>
            <p>Both Push configurations feature a built-in audio interface with two balanced inputs and two balanced outputs, plus a headphone out for main or cue output. With an ADAT extender, these can be increased to 10 inputs and 12 outputs.</p>
            </div>
        </div>
        <div style={{backgroundColor: '#CABFF9', }}>
        <div  className="dFlex ml130">
            <div style={{marginBottom: '100px'}}>
                <h1 style={{marginTop:'100px'}}>Built-in audio interface</h1>
                <p>
                With two inputs switchable between line (balanced) or instrument (unbalanced), and two balanced outputs.
                </p>
            </div>
            <div>
                <h1 style={{marginTop:'100px'}}>ADAT optical in and out</h1>
                <p>Add an additional 8 inputs or outputs. Expand your setup to include mic preamps, additional instruments and effects, and multiple connections to modular gear.</p>
            </div>
        </div>
        </div>
        <div className="ml130">
            <h1 style={{fontSize: '80px'}}>Connecting gear</h1>
            <div className="dFlex">
                <div>
                    <img style={{width:'600px'}} src="https://ableton-production.imgix.net/components/teaser-card/Push_audio_interface_setups.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px'}}>Built-in audio interface</h1>
                    <p style={{width:'600px'}}>Connect pickup-equipped instruments, dynamic microphones, turntables, hardware synths or effects to record directly into your Push session or Ableton Live.
Onstage, audition sounds using the cue output, or use ADAT optical to send up to eight outputs from Push to the sound engineer.

See audio interface specs</p>
                </div>
                <div>
                    <img style={{width:'600px', marginLeft:'50px'}} src="https://ableton-production.imgix.net/components/teaser-card/Tech_Specs-007_Midi_And_USB_2560_x_1600.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px', marginLeft:'50px'}}>
                    MIDI
                    </h1>
                    <p style={{width:'600px', marginLeft:'50px'}}>Connect a class-compliant MIDI keyboard or controller to Push, and send MIDI to synths and other hardware for an expanded, laptop-free music-making setup.

Learn how to use Push with MIDI devices</p>
                </div>
            </div>
            <div className="dFlex">
                <div>
                    <img style={{width:'600px'}} src="https://ableton-production.imgix.net/components/teaser-card/Push_audio_interface_setups.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px'}}>Built-in audio interface</h1>
                    <p style={{width:'600px'}}>Connect pickup-equipped instruments, dynamic microphones, turntables, hardware synths or effects to record directly into your Push session or Ableton Live.
Onstage, audition sounds using the cue output, or use ADAT optical to send up to eight outputs from Push to the sound engineer.

See audio interface specs</p>
                </div>
                <div>
                    <img style={{width:'600px', marginLeft:'50px'}} src="https://ableton-production.imgix.net/components/teaser-card/Tech_Specs-007_Midi_And_USB_2560_x_1600.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px', marginLeft:'50px'}}>
                    MIDI
                    </h1>
                    <p style={{width:'600px', marginLeft:'50px'}}>Connect a class-compliant MIDI keyboard or controller to Push, and send MIDI to synths and other hardware for an expanded, laptop-free music-making setup.

Learn how to use Push with MIDI devices</p>
                </div>
            </div>
            <div className="dFlex">
                <div>
                    <img style={{width:'600px'}} src="https://ableton-production.imgix.net/components/teaser-card/Push_audio_interface_setups.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px'}}>Built-in audio interface</h1>
                    <p style={{width:'600px'}}>Connect pickup-equipped instruments, dynamic microphones, turntables, hardware synths or effects to record directly into your Push session or Ableton Live.
Onstage, audition sounds using the cue output, or use ADAT optical to send up to eight outputs from Push to the sound engineer.

See audio interface specs</p>
                </div>
                <div>
                    <img style={{width:'600px', marginLeft:'50px'}} src="https://ableton-production.imgix.net/components/teaser-card/Tech_Specs-007_Midi_And_USB_2560_x_1600.jpg?auto=compress%2Cformat&w=768"></img>
                    <h1 style={{width:'600px', marginLeft:'50px'}}>
                    MIDI
                    </h1>
                    <p style={{width:'600px', marginLeft:'50px'}}>Connect a class-compliant MIDI keyboard or controller to Push, and send MIDI to synths and other hardware for an expanded, laptop-free music-making setup.

Learn how to use Push with MIDI devices</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TechSpecs;