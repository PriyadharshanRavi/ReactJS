import React from 'react';
import './MemeGenerator.css';

class MemeGenerator extends React.Component{
	constructor(){
		super()
		this.state={
			topText: '',
			bottomText: '',
			randomImage: 'https://i.ytimg.com/vi/grdtCoBkvgc/hqdefault.jpg',
			allMemeImgs: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
		fetch('https://cors-anywhere.herokuapp.com/' + 'http://api.imgflip.com/get_memes')
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data
			this.setState({allMemeImgs: memes})
		})
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name] : value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randomMemeImage = this.state.allMemeImgs[randomNumber].url
		this.setState({
			randomImage : randomMemeImage
		})
	}

	render(){
		return(
			<div className="root">
				<div className="container-fluid">
					<div className="form-group row">
						<div className="col-md-12">
							<form className="text-center" onSubmit={this.handleSubmit}>
								<div className="row">
  								  	<div className="col">
  								    	<input 
  								    		type="text" 
  								    		className="form-control"
  								    		value={this.state.topText}
  								    		name="topText"
  								    		onChange={this.handleChange} 
  								    		placeholder="Top Text" 
  								    	/>
  								  	</div>
  								  	<div className="col">
  								    	<input 
  								    		type="text" 
  								    		className="form-control"
  								    		value={this.state.bottomText}
  								    		name="bottomText"
  								    		onChange={this.handleChange} 
  								    		placeholder="Bottom Text" 
  								    	/>
  								  	</div>
  								</div><br/><br/>
								<button className="btn btn-dark">Generate</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 meme text-center">
							<img src={this.state.randomImage} alt="Random Image" className="img-fluid"/>
							<h2 className="top">{this.state.topText}</h2>
							<h2 className="bottom">{this.state.bottomText}</h2>	
						</div>
					</div>
					<hr/> <br/>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;