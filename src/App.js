import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
function App() {

  const increase = (number, callback)=>{
    setTimeout(()=>{
      
      const result = number + 10;
      if(callback)
        callback(result);
    }, 1000)
  }
  increase(0, result=>{console.log(result)});
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to ='/profiles'>Pprofile</Link>
        </li>
        <li>
          <Link to ='/history'>History example</Link>
        </li>
        
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;
