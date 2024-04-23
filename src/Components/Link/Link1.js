import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Link1 = () =>{
    const location = useLocation();
    return(
        <div className="link1Main">
            <div className="liveHeader">
                <Link className={location.pathname === '/Link1/WhatIsLink'? 'liveHeaderInner status': 'liveHeaderInner'} to='/Link1/WhatIsLink' >What is Link</Link>
                <Link className={location.pathname === '/Link1/LinkEnabledProducts'? 'liveHeaderInner status': 'liveHeaderInner'} to='/Link1/LinkEnabledProducts'>Link-enabled products</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Link1;