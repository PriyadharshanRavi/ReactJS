import React from 'react';
import Title from './components/Title';
import Nav from './components/Nav';
import Decider from './components/Decider';
import Court from './components/Court';
import Footer from './components/Footer';

function App() {
  return (
    <div className="root">
      <div className="container">
        <Title />
        <Nav />
        <Decider />
        <Court />
        <Footer />
      </div>
    </div>
  );
}

export default App;
