import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../../Images/image1.jpg'
import Image2 from '../../Images/01 1.jpg'
import Image3 from '../../Images/01 2.jpg'
import Image4 from '../../Images/01 3.jpg'
import Image5 from '../../Images/02 1.jpg'
import Image6 from '../../Images/02 2.jpg'
import Image7 from '../../Images/02 3.jpg'
import Image8 from '../../Images/03 1.jpg'
import Image9 from '../../Images/03 2.jpg'
import Image10 from '../../Images/03 3.jpg'


const Home = () => {
    return(
        <div className="homeMain">
            <Link>
            <div className="mainImage">
                <img className="homeImage" src={Image1} />
             </div>
             </Link>
                <h1 className="marginLeft">Learn More about Live 12</h1>
                <div className="firstThree marginLeft">
                <div className="" style={{position: "relative",}}>
                    <Link to=''>
                    <img className="imageHW" src={Image2} alt='1Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Get Tips and Tricks from our favorite Creators
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link to=''>
                    <img className="imageHW" src={Image3} alt='2Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Discover Mild: Live 12's New Bi-Tembral Synth
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link to=''>
                    <img className="imageHW" src={Image4} alt='3Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Watch the Learn Live 12 Videos
                    </div>
                    </Link>
                </div>
                </div>
                <h1 className="marginLeft">Expand Live 12 with Packs</h1>
                <div className="firstThree marginLeft">
                <div className="" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image5} alt='4Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Granulator |||
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image6} alt='5Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Trap Drums by Sound Oracle
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image7} alt='6Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Lost & Found
                    </div>
                    </Link>
                </div>
                </div>
                <h1 className="marginLeft">Deploy Your Music Making</h1>
                <div className="firstThree marginLeft">
                <div className="" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image8} alt='7Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Learn the foundation of music
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image9} alt='8Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Get started with Live
                    </div>
                    </Link>
                </div>
                <div className="ml30" style={{position: "relative",}}>
                    <Link>
                    <img className="imageHW" src={Image10} alt='9Image' />
                    <div style={{position: "absolute", bottom:'-30px', right:'0', left:'0', background:'#ffff', color:'black', padding:'10px'}}>
                        Experiment with tuning
                    </div>
                    </Link>
                </div>
                </div>
                <div className="homeFooter">
                    <h2>More:</h2>
                    <h2><Link>All Posts</Link></h2>
                    <h2><Link>Artists</Link></h2>
                    <h2><Link>News</Link></h2>
                    <h2><Link>Downloads</Link></h2>
                    <h2><Link>Tutorials</Link></h2>
                    <h2><Link>Videos</Link></h2>
                    <h2><Link>Loop</Link></h2>
                    <h2><Link>One Thing</Link></h2>
                </div>
        </div>
    );
}

export default Home;