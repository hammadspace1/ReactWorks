import React from "react";
import Live12first from '../../../Images/Live12/Live12first.jpg'
import { Link } from "react-router-dom";

const Live12 = () => {
    return(
        <div className="live12Main">
            <div className="live12FirstImage">
                <img src={Live12first} />
            </div>
            <h1 className="live12H1">Whatever music you make, and whoever you are as a music maker, there is always more to explore in Live. See how you can go further with Live 12.</h1>
            <iframe
                className="live12VideoTag"
                src="https://www.youtube.com/embed/QFCV6EkqRQs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h1 className="live12H1">Find out What's possible in Live 12.</h1>
            <div className="dFlex pl130 fw400">
                <h3>Jump to: </h3>
                <h3 className="textBlue fw400"><Link>play freely with ideas</Link></h3>
                <h3 className="textBlue fw400"><Link>surprise yourself with sounds</Link></h3>
                <h3 className="textBlue fw400"><Link>work more intuitively</Link></h3>
                <h3 className="textBlue fw400"><Link>see all new features</Link></h3>
            </div>
            <div className="live12Large">
                <div className="pl130">
                    <h1 className="live12LargeH1">Play freely with ideas</h1>
                    <iframe
                        className="live12VideoTag2"
                        src="https://www.youtube.com/embed/z7kjcMvMr3M"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="dFlex mb100">
                        <div className="flex1">
                            <h2>Reshape MIDI patterns</h2>
                            <p>
                                Apply a veriety of simple or complex variation to your MIDI clips with new MIDI trasformation.  Add ornaments and articulations, draw acceleration and deceleration curves, connect successive notes and chords, simulate the strum of a guitar, and more.
                            </p>
                            <img src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?auto=compress%2Cformat&w=1260"></img>
                        </div>
                        <div className="flex2">
                            <h2>Generate inspiration</h2>
                            <p>
                            Conjure up melodies, chords and rhythms with the help of new MIDI Generators. Set constraints and let your chosen Generator create playful and original ideas for you to develop and turn into your own.
                            </p>
                            <h2 className="flex2h2">
                            Do more with Max for Live
                            </h2>
                            <p>
                            Try out additional Max for Live Transformations and Generators that give you deeper ways of working with MIDI, or go even further by building new ones.
                            </p>
                        </div>
                    </div>
                    <div className="dFlex mb100">
                        <div className="twoflex1">
                            <h2>
                            Embrace and explore tunings
                            </h2>
                            <p>
                            Follow your preferred tuning systems or try different ones more easily. Work outside of 12-tone equal temperament, and use your tuning with Live’s devices as well as any MPE-capable plugin or hardware.
                            </p>
                        </div>
                        <div className="twoflex2">
                        <iframe
                        className="twoflex2Video"
                        src="https://www.youtube.com/embed/ZldZ5WhSM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                        </div>
                    </div>
                    <div className="dFlex mb100">
                        <div className="threeflex1">
                        <iframe
                        className="threeflex1Video"
                        src="https://www.youtube.com/embed/u6IpJYpN48A"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                        </div>
                        <div className="threeflex2">
                            <h2>
                            Stay in key
                            </h2>
                            <p>
                            Transform or generate ideas within the confines of the selected scale, or sync the scale of MIDI devices and instruments to the clip being played.
                            </p>
                        </div>
                    </div>
                    <div className="dFlex mb100 pb100">
                        <div className="fourflex1">
                        <img src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?auto=compress%2Cformat&w=1260"></img>
                        <img src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-modulation.png?auto=compress%2Cformat&w=1024"></img>
                        </div>
                        <div className="fourflex2">
                            <h2>
                            Edit MIDI more easily
                            </h2>
                            <p>
                            Use keyboard and mouse operations to edit MIDI in new ways. Split a note in two, or chop it into several parts. Select a set of notes and join them together, or make them fill a selected time range. Plus, you can access to more tools from the Note Utilities panel on the left, such as Fit Scale, Humanize, Add Intervals, and more.
                            </p>
                            <h2 className="mt200">Modulate more flexibly</h2>
                            <p>
                            Stay in control of a parameter, even after it’s been mapped to a modulation source; Max for Live devices like LFO, Shaper and Envelope Follower now let you freely adjust a destination that’s being modulated.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <h1 className="h1Large">Surprise yourself with the sounds you create</h1>
                <div className="dFlex mb100">
                    <div className="slLive12F1">
                        <h1 className="mt300">
                        Find inspiration
                        </h1>
                        <p>
                        Start playing with any of Live’s new instruments and effects and you’ll soon find new textures and techniques to spark further experimentation.
                        </p>
                    </div>
                    <div className="slLive12F2">
                    <iframe
                        className="threeflex1Video"
                        src="https://www.youtube.com/embed/ncdNTdzBK4Y"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>

                </div>
            </div>
            <div className="live12Last">
                <h1 className="h1Large">Work more intuitively</h1>
                <div className="dFlex mb100">
                    <div className="first">
                        <img src="https://ableton-production.imgix.net/components/text-beside-media/web-mixer-improvements.png?auto=compress%2Cformat&w=1024"></img>
                    </div>
                    <div className="second">
                        <h1>Set up to stay focused</h1>
                        <p>Use Live’s Mixer in Arrangement View to get more information and control without moving to Session View and breaking the flow. Toggle the visibility of each Mixer section to fit your needs, and benefit from improved readability and feedback.</p>
                    </div>
                </div>
                <div className="dFlex mb100">
                    <div className="first2">
                    <h1>See everything you need</h1>
                        <p>Stack Live’s Clip and Device Views to see more of what’s going on in your track at a glance. See the Clip Editor or automation and the Instrument or Effect you’re working on at the same time, so you can work without repeatedly switching between views.</p>
                    </div>
                    <div className="second2">
                    <img src="https://ableton-production.imgix.net/components/text-beside-media/web-stacked-views.png?auto=compress%2Cformat&w=1024"></img>
                    </div>
                </div>
                <div className="afterFlex">
                    <img src="https://ableton-production.imgix.net/components/text-beside-media/web-browser-lavender-light.png?auto=compress%2Cformat&w=1920"></img>
                </div>
                <div className="dFlex mb100 mt100">
                    <div className="first3">
                        <h1>Search with tags</h1>
                        <p>
                        Discover new sounds and find them again easier with the help of Live’s new tagging system. All factory sound content – including Packs – in Live now comes labeled in the Browser with instrument categories and helpful musical descriptors – and if you want more tags, you can create your own.
                        </p>
                    </div>
                    <div className="second3">
                        <h1>Browse better</h1>
                        <p>
                        Get search results that cover the whole library, rather than being confined to the Browser’s built-in categories. And explore your search history to see sounds or presets you've previously looked for.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="live12LargeH1 ml130">Sound Similarity Search</h1>
                    <iframe
                        className="lastIfram"
                        src="https://www.youtube.com/embed/XYJhDWJvEms"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="dFlex mb100 mt100">
                    <div className="first3">
                        <h1>Search with tags</h1>
                        <p>
                        Discover new sounds and find them again easier with the help of Live’s new tagging system. All factory sound content – including Packs – in Live now comes labeled in the Browser with instrument categories and helpful musical descriptors – and if you want more tags, you can create your own.
                        </p>
                    </div>
                    <div className="second3">
                        <h1>Browse better</h1>
                        <p>
                        Get search results that cover the whole library, rather than being confined to the Browser’s built-in categories. And explore your search history to see sounds or presets you've previously looked for.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Live12;