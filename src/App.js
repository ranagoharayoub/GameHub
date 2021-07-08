import './App.css';
import './mdl-tabs-links/material.teal-indigo.min.css'
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
import Settings from './Screens/Settings';
import Matches from './Screens/Matches';
import { useHistory } from 'react-router-dom';
import MainPro from './Screens/Profile Page/MainPro';
import IndividualGame from './Screens/IndividualGame';
import IndTour from './Screens/IndTour'
import FbGlogin from './Screens/SocialLoginPagesSignup/FbGlogin'
import Champions from './Screens/Champions'
import AfterSignup from './Screens/AfterSignup'
import Tickets from './Screens/Tickets'
import Faq from './Screens/Faq'
import {ContextAPI} from './Context/Context'
function App() {
  const [width, setwidth] = useState(window.innerWidth)
  const [profilepicture, setprofilepicture] = useState(null)
  const history = useHistory();

  useEffect(() => {
      const widthHandler = () => {
        setwidth(window.innerWidth)
      }
      window.onresize=widthHandler
  }, [width])

  
  console.log(width)
  return (
      <Router>
        <ContextAPI.Provider value={{profilepicture, setprofilepicture}}>
        {
          width> '800' ?
          <Navbar></Navbar>
          :
          <MobileNavbar></MobileNavbar>
          
        }
        <Switch>
          <Route exact path='/'  ><Home width={width}></Home></Route>
          <Route path='/tournament'  ><AllTournaments width={width}></AllTournaments></Route>
          <Route path="/indtour/:gameId"><IndTour width={width}/></Route>
          <Route path='/games'  ><AllGames width={width}></AllGames></Route>
          <Route path='/ticket'  ><Tickets></Tickets></Route>
          <Route path='/signup'  ><SignUp width={width}></SignUp></Route>
          <Route path='/success'  ><AfterSignup></AfterSignup></Route>
          <Route path='/login'  ><Login width={width} history={history}></Login></Route>
          <Route path='/fbglogin'><FbGlogin></FbGlogin></Route>
          <Route path='/settings/:id'  ><Settings width={width}></Settings></Route>
          <Route path='/matches'  ><Matches width={width}></Matches></Route>
          <Route path='/champs'  ><Champions></Champions></Route>
          <Route path='/profile/:id'  > <MainPro /> </Route>
          {/* <Route path='/indigame'  ><IndividualGame width={width}></IndividualGame></Route> */}
          <Route path='/:game/:ind'  ><IndividualGame width={width}></IndividualGame></Route>
          <Route path='/faq'><Faq></Faq></Route>
        </Switch>
        <Footer></Footer>
        </ContextAPI.Provider>
      </Router>
  );
}

export default App;
