import React from "react";
import { Link, useLocation, Outlet} from "react-router-dom";

const Push = () => {

    const location = useLocation();
    return(
        <div className="pushMain">
            <div className="liveHeader">
                    <Link className={location.pathname === '/Push/OverView' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Push/OverView'>Overview</Link>
                    <Link className={location.pathname === '/Push/TechSpecs' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Push/TechSpecs'>Tech Specs</Link>
                    <Link className={location.pathname === '/Push/LearnPush' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Push/LearnPush'>Learn Push</Link>
                    <Link className={location.pathname === '/Push/UpgradeKit' ? "liveHeaderInner status" : "liveHeaderInner"} to='/Push/UpgradeKit'>Upgrade Kit</Link>
                    <Link className = "liveHeaderInner colorBlue" to='/Live/BuyNow'>Buy Now</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Push;