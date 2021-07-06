import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AOS from 'aos';
import HashLoader from 'react-spinners/HashLoader'


function App() {
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  AOS.init();
  
  if (loading) {
    return (
      <div className='loadingSpiner'>
        <HashLoader  color={'#766dff'} loading={loading}  size={100} />
      </div>
    ); 
  } else {
    return (
      <Router>
            <Switch>
              <Route exact path='/'>
                <Home /> 
              </Route>
            </Switch>
      </Router>
    )
  }
 
}

export default App;
