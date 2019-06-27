import React from 'react';

class Changingstate extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(prev => {
			return{
				count: prev.count + 1
			}	
		})
	}

	render(){
		return(
			<div className="root">
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}>inc</button>
			</div>
		);
	}
}


export default Changingstate;