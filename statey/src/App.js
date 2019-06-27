import React from 'react';
import Changingstate from './Changingstate';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn : true
    }
  }
  render(){
    var display;
    if(this.state.isLoggedIn === true){
      display = 'in'
    }else{
      display = 'out'
    }
    return(
      <div className="root">
        <p>Hey you have logged {display}</p>
        <Changingstate />
      </div>
    );
  }
}

export default App;