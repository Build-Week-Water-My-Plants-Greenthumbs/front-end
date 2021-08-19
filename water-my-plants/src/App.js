<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddPlantForm from './components/AddPlantForm.js'
import PlantList from './components/PlantList'
import Plant from './components/Plant'
=======

import { Route } from 'react-router-dom';
>>>>>>> 8cf87966d96b8c527cafc5db1f05308de365635c
import './App.css';
import Home from './components/Home'

function App() {
  return (
<<<<<<< HEAD
      <Router>
      <div>
          <section className="App-body">
              <Switch>
                  <Route exact path='/' component={SignIn} />
                  <Route path='/sign-up' component={SignUp}/>
                  <Route 
                      exact path='/add-plant' 
                      component={AddPlantForm} >
                  </Route>
                  <Route 
                      exact path='/plant-list' 
                      component={PlantList}>
                  </Route>
                  {/* to view an individual plant based on its id*/}
                  <Route path='/plant/:id' 
                  component={Plant}/>
                 
              </Switch>
          </section>
      </div>
      </Router>
=======
    <div className="App">
        <header>
        <h1>Water My Plants</h1>
          <p>
            Never forget when it's time to feed your foliage and quench your
            plants' thirst.
          </p>
        </header>
        <Route path='/' component={Home}/>
    </div>
>>>>>>> 8cf87966d96b8c527cafc5db1f05308de365635c
  );
}

export default App;