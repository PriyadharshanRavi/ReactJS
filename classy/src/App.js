import React from 'react';
import Header from './Header';
import Greeting from './Greeting';

class App extends React.Component{
  render(){
    return(
      <div className="root">
        <Header username="Priyan"/>
        <Greeting />
      </div>
    )
  }
}

export default App;
