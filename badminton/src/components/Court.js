import React from "react";

function Court(props){
	console.log(props)
	//const img = require('./images/d.jpg');
	return(
		<div className="root">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<img className="imgcenter img-fluid" src={require('./images/d.jpg')} />
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

export default Court;