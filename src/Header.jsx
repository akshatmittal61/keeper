import React from "react";
import Theme from "./theme";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
function Header() {
    return (
        <header>
            <h1 className="title">
                <AllInclusiveIcon />
                Google Keeper
            </h1>
            <Theme />
        </header>
    )
}
export default Header;