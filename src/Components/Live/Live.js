import React from "react";
import { Link, Outlet, useLocation  } from "react-router-dom";

const Live = () => {

    const location = useLocation();
    return(
        <div className="liveMain">
            <div className="liveHeader">
                    <Link className={location.pathname === '/Live/Live12' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/Live12'>Live12</Link>
                    <Link className={location.pathname === '/Live/AllNewFeatures' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/AllNewFeatures'>All new features</Link>
                    <Link className={location.pathname === '/Live/WhatIsLive' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/WhatIsLive'>What is Live?</Link>
                    <Link className={location.pathname === '/Live/MaxForLive' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/MaxForLive'>Max for Live</Link>
                    <Link className={location.pathname === '/Live/LearnLive' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/LearnLive'>Learn Live</Link>
                    <Link className={location.pathname === '/Live/IntegratedHardware' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/IntegratedHardware'>Integrated hardware</Link>
                    <Link className={location.pathname === '/Live/CompareEditions' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Live/CompareEditions'>Compare Editions</Link>
                    <Link className = "liveHeaderInner colorBlue" to='/Live/BuyNow'>Buy Now</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Live;