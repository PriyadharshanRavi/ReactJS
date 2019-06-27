import React from 'react';
import Sample from './Sample';
import Practice from './Practice';

class App extends React.Component{
  constructor(){
   super()
   this.state={
      age: '',
      firstName:  '',
      isFriendly: true,
      gender: '', 
      favColor: 'black'
   } 
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    var {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
    //  [event.target.name] : event.target.value,
        [name] : value
    })
  }

  handleSubmit(){

  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            value={this.state.firstname} 
            name="firstName" 
            placeholder="first name" 
            onChange={this.handleChange} 
          />
          <input type="text" 
            value={this.state.age} 
            name="age" placeholder="age" 
            onChange={this.handleChange} 
          />
          {this.state.firstName} 
          {this.state.age}  
          <br /><br />  
          <textarea value={"sasjahjsasn"}/> 
          <br /><br />
          <label>
            <input 
              type="checkbox"
              checked={this.state.isFriendly}
              name="isFriendly"
              onChange={this.handleChange}
            /> is isFriendly
          </label>
          <br /><br />
          <label>
            <input 
              type="radio"
              value="male"
              name="gender"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            /> is Male
          </label>
          <br /><br />
          <label>
            <input 
              type="radio"
              value="female"
              name="gender"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            /> is Female
          </label>
          <h1>you are a {this.state.gender}</h1>
          {/** formik **/}
          <br/>
          <select value={this.state.favColor}
                  onChange={this.handleChange}
                  name="favColor"
          >
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
          </select>

          <h2>my fav color is {this.state.favColor}</h2>
        <Sample />
        <button>Submit</button>
        </form>
        <Practice />
      </div>
    );
  }
}

export default App;