import React from 'react';

class Footer extends React.Component{
	render(){
		return(
			<div className="root">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<footer className="fixed-bottom">
								<small><center> &copy; Memes 2019 </center></small>
							</footer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;