import React from 'react';

class Sw extends React.Component{
	constructor(){
		super()
		this.state = {
			loading: true,
			char: {}
		}
	}

	componentDidMount(){
		this.setState({
			loading:true
		})
		fetch("https://swapi.co/api/people/2")
		.then(response => response.json())
		.then(data => {
			this.setState({
				loading: false,
				char: data
			})
		})
	}

	render(){
		return(
			<div>
				{this.state.loading === true? <h1>loading...</h1> : this.state.char.mass}
			</div>
		);
	}
}

export default Sw;