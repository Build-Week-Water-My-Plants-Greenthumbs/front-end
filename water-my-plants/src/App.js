import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddPlantForm from './components/AddPlantForm.js'
import PlantList from './components/PlantList'
import Plant from './components/Plant'
import './App.css';

function App() {
  return (
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
  );
}

export default App;