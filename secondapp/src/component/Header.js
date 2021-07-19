import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <h1>Header</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Header