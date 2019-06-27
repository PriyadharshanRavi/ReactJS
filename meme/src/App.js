import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MemeGenerator from './components/MemeGenerator';

class App extends React.Component{
  render(){
    return(
      <div className="root">
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
