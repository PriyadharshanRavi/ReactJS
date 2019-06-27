import React from 'react'

function Decider(){
	return(
		<div className="root">
			<div className="container">
				<div className="row col-md-12 justify-content-center">
					<form>
						<label>
							<select className="form-control" value="" onChange="">
								<option> Singles Service </option>
								<option> Singles </option>
								<option> Doubles Service </option>
								<option> Doubles </option>
							</select>
						</label>
						&nbsp;&nbsp;&nbsp; 
						<input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Decided" />
					</form>
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

export default Decider;