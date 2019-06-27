import React from 'react';

class Practice extends React.Component{
	constructor(){
		super()
		this.state={
			firstName: '',
			lastName: '',
			age: 0,
			gender:'',
			destination: '',
			isVegan: false,
			isKosher: false,
			isLactoseFree: false

		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		var {name,value, type, checked} = event.target
		type === 'checkbox' ?
			this.setState({
				[name] : checked
			})
			: 
			this.setState({
				[name] : value
			})
	}
	render(){
		return(
			<div>
				<form>
					First Name: <input 
									value={this.state.firstName} 
									type="text" 
									name="firstName" 
									placeholder="FirstName" 
									onChange={this.handleChange}
								/><br/>
					
					Last Name: <input 
									value={this.state.lastName} 
									type="text" 
									name="lastName" 
									placeholder="LastName" 
									onChange={this.handleChange}
								/><br/>
					
					Age: <input 
							value={this.state.age} 
							type="number" 
							name="age" 
							placeholder="Age" 
							onChange={this.handleChange}
						 /><br/>
					
					<label>
						<input 
							type="radio" 
							name="gender" 
							value="male" 
							checked={this.state.gender === 'male'}
							onChange={this.handleChange}
						/> Male
					</label><br/>
					
					<label>
						<input 
							type="radio" 
							name="gender" 
							value="female" 
							checked={this.state.gender === 'female'}
							onChange={this.handleChange}
						/> Female
					</label><br/>
					
					<label value={this.state.destination} name="destination">
						<select name="destination" value={this.state.destination} onChange={this.handleChange}>
							<option value="singapore">Singapore</option>
							<option value="usa">USA</option>
							<option value="canada">Canada</option>
						</select>
					</label><br/>
					
					<label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
          			
          			<button>Submit</button>

				</form><hr/>

				<h2>entered info</h2>
				your name : {this.state.firstName} {this.state.lastName} <br/>
				age : {this.state.age}<br/>
				gender : {this.state.gender}<br/>
				destination : {this.state.destination}<br/>
				diet : <br/>Vegan - {this.state.isVegan? 'yes' : 'no'}<br/>
					   Kosher - {this.state.isKosher? 'yes' : 'no'}<br/>
					   LactoseFree - {this.state.isLactoseFree? 'yes' : 'no'}<br/>	
				<br/>
			</div>
		);
	}
}

export default Practice;