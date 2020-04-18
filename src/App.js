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
  // increase(0, result=>{
  //   console.log(result)
  //   increase(result, result=>{
  //     console.log(result);
  //     increase(result, result=>{
  //       console.log(result);
  //       console.log("exit");
  //     })
  //   })
  // });

  const increase1 = (number)=>{
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const result  = number + 10
        if ( result > 20){
          const e= new Error("Number Too big");
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise
  }

  // increase1(0).then(number => {
  //   console.log(number);
  //   return increase1(number);
  // })
  // .then(number=>{
  //   console.log(number);
  //   return increase1(number);
  // })
  // .then(number=>{
  //   console.log(number);
  //   return increase1(number);
  // })
  // .catch(e=>{
  //   console.log(e);
  // } )
  
  
  const runTask = async()=>{
    try{
      let result = await increase1(0);
      console.log(result);
      let result1 = await increase1(result);
      console.log(result1);
      let result2 = await increase1(result1);
      console.log(result2);
    }catch(e){
      console.log(e);
    }
  }
  runTask();

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
