import React from 'react';

function Nav(){
	return(
		<div className="root">
			<div id="navigation" className="container">
				<div className="row">
				<div className="col-md-12">
					<nav className="navbar navbar-light bg-light">
						<a className="navbar-brand" href="#">Referee</a>
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#rules">Rules</a>
							</li>
						</ul>
					</nav>
				</div>		
				</div>

				<div className="row">
					<div className="col-md-12">
						<hr/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;