import React from "react";

const Note = () => {
    return(
        <div>
            <video style={{width: '100%'}} >
                <source src="https://cdn-resources.ableton.com/resources/videos/note/header-desktop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{backgroundColor:'#E0FFE1',width:'800px', marginTop:'-30px',height:'500px'}}>
                <h1 style={{padding:'100px 0 100px 130px'}}>
                Make new ideas a habit
                </h1>
                <p style={{padding:'0px 0 100px 130px'}}>Note is a place to start ideas, experiment with sounds and find direction. As part of your regular music-making routine, it can help you hone the skill of starting or ease into a creative headspace at the start of a session.</p>

            </div>
            <video style={{marginLeft:'700px', width:'800px'}} >
                <source src="https://cdn-resources.ableton.com/resources/videos/note/header-desktop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{marginTop:'80px'}} className="dFlex mb100">
                        <div>
                        <iframe
                        className="OVclip2"
                        src="https://cdn-resources.ableton.com/resources/videos/push/push-3/p3_faag_mpe_iy.mp4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                ></iframe>
                        </div>
                        <div style={{marginLeft:'100px', marginTop: '70px'}}>
                            <h1>MPE-enabled pads</h1>
                            <p>Shape your sound with pads that respond to the slightest movement of your fingers. Bend, slide and shift between different notes, sounds and articulations.</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#24FBC8',width:'900px', marginTop:'-30px',height:'600px'}}>
                <h1 style={{padding:'100px 0 100px 130px'}}>
                Make new ideas a habit
                </h1>
                <p style={{padding:'0px 0 100px 130px'}}>Note is a place to start ideas, experiment with sounds and find direction. As part of your regular music-making routine, it can help you hone the skill of starting or ease into a creative headspace at the start of a session.</p>

            </div>
            <img style={{margin: '80px 130px 80px 130px', width:'1250px'}} src="https://ableton-production.imgix.net/components/text-beside-media/Note_and_Ableton_Cloud.jpg?auto=compress%2Cformat&w=1920"></img>
        </div>
    );
}

export default Note;