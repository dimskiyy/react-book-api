import React from "react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "constants/Routes";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header_title">
                <Link className="header_logo" to={RoutesConfig.HOME}>
                    Search for books
                </Link>
            </h1>
            <h2 className="header_fav">
                <Link className="fav_link" to={RoutesConfig.FAVORITES}>
                    Favorite
                </Link>
            </h2>
        </div>
    );
};

export default Header;
