import './App.css';
import Home from './Screens/Home';
import Navbar from './Components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import MobileNavbar from './Components/Navbar/MobileNavbar';
import AllTournaments from './Screens/AllTournaments';
import AllGames from './Screens/AllGames';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';

function App() {
  const [width, setwidth] = useState(window.innerWidth)
  
  useEffect(() => {
      const widthHandler = () => {
        setwidth(window.innerWidth)
      }
      window.onresize=widthHandler
  }, [width])

  
  console.log(width)
  return (
      <Router>
        {
          width> '800' ?
          <Navbar></Navbar>
          :
          <MobileNavbar></MobileNavbar>
          
        }
        <Switch>
          <Route exact path='/'  ><Home width={width}></Home></Route>
          <Route path='/tournament'  ><AllTournaments width={width}></AllTournaments></Route>
          <Route path='/games'  ><AllGames width={width}></AllGames></Route>
          <Route path='/signup'  ><SignUp width={width}></SignUp></Route>
          <Route path='/login'  ><Login width={width}></Login></Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
