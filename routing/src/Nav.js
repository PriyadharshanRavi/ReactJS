import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav(){
	const navStyle = {
		color: 'white'
	};
	return(
			<div>
				<nav>
                    <h1>Logo</h1>
                    <ul className="nav-link">
                    	<Link style={navStyle} to="/shop">
                        	<li>Shop</li>
                        </Link>
                        <Link style={navStyle} to="/about">
                        	<li>About</li>
                        </Link>
                    </ul>
                </nav>
			</div>
	);
	
}
		


export default Nav;

