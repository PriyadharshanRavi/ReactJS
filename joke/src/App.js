import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Joke from './components/Joke';
import data from './data'


//filter, map
function App() {
  const jokeComponents = data.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
  return (
    <div className="root">
      <Header />
      
      {jokeComponents}
      
      <Footer />
    </div>
  );
}

export default App;
