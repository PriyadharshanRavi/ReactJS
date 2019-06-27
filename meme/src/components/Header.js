import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div className="root">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3">
							<nav className="navbar navbar-light ">
							  <a className="navbar-brand" href="#">
							    <img src={require('./images/karma-logo.png')} width="40" height="40" alt="karma-logo" />
							  </a>
							</nav>
						</div>
						
						<div className="col-md-9 text-right">
							<pre /><h3>Meme Generator</h3>
						</div>
					</div>
					<hr />
				</div>
			</div>
		);
	}
}

export default Header;