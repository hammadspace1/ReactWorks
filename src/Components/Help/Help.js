import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const Help = () => {

    const location = useLocation();
    return(
        <div className="liveMain">
            <div className="liveHeader">
                    <Link className={location.pathname === '/Help/OverView' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Help/OverView'>Overview</Link>
                    <Link className={location.pathname === '/Help/LearnLive' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Help/LearnLive'>Learn Live</Link>
                    <Link className={location.pathname === '/Help/LearnPush' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Help/LearnPush'>Learn Push</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Help;