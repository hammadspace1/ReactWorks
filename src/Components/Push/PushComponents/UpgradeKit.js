import React from "react";
import { Link } from "react-router-dom";

const UpgradeKit = () => {
    return(
        <div>
            <div style={{backgroundColor:'#C8BEFB',marginBottom:'100px' }}>
                <div className="ml130">
                    <h1 style={{lineHeight: '70px', marginRight: '130px',paddingTop:'100px', paddingBottom:'50px'}}>Push is upgradeable. If your Push doesn’t have a processor, use the Upgrade Kit to install all the components it needs to work as a standalone instrument.</h1>
                     <div className="dFlex " style={{paddingBottom:'100px'}} >
                         Jump to: <Link style={{paddingRight: '20px', color: 'blue'}}>New features in Live 12</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Setup</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Interface</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Instruments & Effects</Link> <Link style={{paddingRight: '20px', color: 'blue'}}>Workflows</Link>
                    </div>
                </div>
            </div>
            <img style={{width:'1250px',marginLeft:'130px', marginTop:'70px'}} src="https://ableton-production.imgix.net/components/text-beside-media/Upgrade_Kit_4000x2250-2.jpg?auto=compress%2Cformat&w=1920"></img>
            <div className="dFlex ml130">
                <div style={{width:"1000px"}}>
                    <h1>What's an Upgrade Kit?</h1>
                    <p>The Upgrade Kit is used to convert your Push 3 without a processor into a standalone instrument. With the standalone components installed, your Push will be exactly the same as a Push bought with a processor.

                        The Upgrade Kit costs USD 1049.00.

                        Buy now ›</p>
                </div>
                <div style={{width:"1000px"}}>
                    <h1>What’s in the box?</h1>
                    <p>
                    The Upgrade Kit contains the Push 3 standalone components: an Intel® 11th Gen Core™ i3-1115G4 processor with 8GB of RAM, a 256GB SSD hard drive, lithium iron phosphate battery and heatsink. It also includes screws, a screwdriver, a backplate lifter, and a protective mat. 

                        The Intel® NUC Compute Element combines a processor, RAM memory and WiFi. It’s the first Intel® processor to be adapted for Push.
                    </p>
                </div>
            </div>
            <div className="dFlex ml130 mb100">
                <div>
                    <h1>
                    A step by step guide
                    </h1>
                    <p>We hope you find the process of upgrading your Push fun and rewarding. It’s designed to be easy enough to complete on your own and should take no more than 30 minutes.

                        Read the full installation guide ›</p>
                </div>
                <div>
                <iframe
                        style={{width:'780px', height:'400px', marginLeft:'80px'}}
                        src="https://www.youtube.com/embed/ZwuQ9kuMRII"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                </div>
                
            </div>
            <img style={{width:'1250px',marginLeft:'130px', marginTop:'70px'}} src="https://ableton-production.imgix.net/components/text-beside-media/Upgrade_Kit_4000x2250-2.jpg?auto=compress%2Cformat&w=1920"></img>
        </div>
    );
}

export default UpgradeKit;