import React from 'react';

class Sample extends React.Component{
  constructor(){
    super()
    this.state={
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    var {name,value} = event.target
    this.setState({
      [name] : value
    })
  }

  render(){
    return(
      <div>
        <form>
          <br />
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="first name"/>
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="last name"/>
          {this.state.firstName}
          {this.state.lastName}
        </form>
      </div>
    );
  }
}

export default Sample;