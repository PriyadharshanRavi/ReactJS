import React from 'react';
import Conditional from './Conditional';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogged: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state=>({
      isLogged : !state.isLogged
    }));
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLogged ? 'Loggedin' : 'Loggedout'}
        </button>
        <Conditional isLogged={this.state.isLogged} />
      </div>
    );
  }
}

export default App;