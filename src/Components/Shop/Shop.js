import React from "react";
import {Link, useLocation, Outlet} from 'react-router-dom'

const Shop = () => {

    const location = useLocation();
    return(
        <div className="liveMain">
            <div className="liveHeader">
                    <Link className={location.pathname === '/Shop/OverView' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/OverView'>Overview</Link>
                    <Link className={location.pathname === '/Shop/Live' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/Live'>Live</Link>
                    <Link className={location.pathname === '/Shop/Push' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/Push'>Push</Link>
                    <Link className={location.pathname === '/Shop/EducationalOffers' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/EducationalOffers'>Educational offers</Link>
                    <Link className={location.pathname === '/Shop/MaxForLive' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/MaxForLive'>Max for Live</Link>
                    <Link className={location.pathname === '/Shop/MakingMusic' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/MakingMusic'>Making Music</Link>
                    <Link className={location.pathname === '/Shop/Merchandise' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Shop/Merchandise'>Merchandise</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Shop;