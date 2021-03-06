import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>        
          <Nav />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About} />
              <Route path='/Shop' component={Shop} />
            </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;

