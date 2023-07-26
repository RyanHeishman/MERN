import React, {useStae} from "react";
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return(
      <header>
        <nav>
            <h1>Routing</h1>
            <Link to={'/'}>Landing Page</Link>
            <br />
            <Link to={'/home'}>Home</Link>
        </nav>
      </header>
    )
}

export default Nav;