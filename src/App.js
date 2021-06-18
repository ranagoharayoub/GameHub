import './App.css';
import Home from './Screens/Home';
import Navbar from './Components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'  ><Home></Home></Route>
        </Switch>
      </Router>
      
    
  );
}

export default App;
