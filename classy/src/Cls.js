import React from 'react'

class Cls extends React.Component{
	constructor(brand, os){
		this.brand = brand;
		this.os = os;
	}
	render(){
		return(
			<div className="root">
				<p>{this.props.brand}</p>
			</div>
		)
	}
}

export default Cls 