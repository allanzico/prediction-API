import React from "react";
import injectContext from "./store/appContext";
import Fixtures from "./component/fixtures";





//create your first component
export const Layout = () => {
    return (
        <div className="d-flex flex-column h-100">
            <Fixtures/>
        </div>
    );
};

export default injectContext(Layout);