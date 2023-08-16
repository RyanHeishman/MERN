import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {


    return (
        <header>
            <nav className="d-flex justify-content-around align-items-center bg-warning w-100">
                <h1>TvDb</h1>
                    <div className="d-flex justify-content-around w-50">
                        <Link to={'/show'}>Add a Show</Link>
                    </div>
            </nav>
        </header>
    )
}

export default Nav;