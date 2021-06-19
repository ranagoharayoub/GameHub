import './App.css';
import Home from './Screens/Home';
import Navbar from './Components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'  ><Home></Home></Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
