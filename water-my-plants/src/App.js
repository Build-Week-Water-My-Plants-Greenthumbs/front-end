import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddPlantForm from "./components/AddPlantForm.js";
import LandingPage from "./components/LandingPage";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";
import Plant from "./components/Plant"
import "./App.css";
import Home from "./components/Home";
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Water My Plants</h1>
        <NavBar />
        <p>
          Never forget when it's time to feed your foliage and quench your
          plants' thirst.
        </p>
      </header>
      <PrivateRoute path="/edit" component={EditUser} />
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <PrivateRoute exact path="/add-plant" component={AddPlantForm} />
      <PrivateRoute path='/dashboard' component={LandingPage}/>
      {/* to view an individual plant based on its id*/}
     <PrivateRoute path="/plant/:id" component={Plant} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
