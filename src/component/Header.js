import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <h1>hello</h1>
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/about'>about</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;