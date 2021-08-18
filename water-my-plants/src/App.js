
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'

function App() {
  return (
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
  );
}

export default App;
