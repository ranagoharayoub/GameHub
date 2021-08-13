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
import axios from 'axios';
import DepositFunds from './Screens/DepositFunds';
import PaymentMethod from './Screens/PaymentMethod';
import BuyCredits from './Screens/BuyCredits';

function App() {
  const [width, setwidth] = useState(window.innerWidth)
  const [profilepicture, setprofilepicture] = useState(null)
  const [username, setusername] = useState(null)
  const [balance, setbalance] = useState(null)
  const [credits, setcredits] = useState(null)

  const history = useHistory();

  useEffect(() => {
      const widthHandler = () => {
        setwidth(window.innerWidth)
      }
      window.onresize=widthHandler
  }, [width])

  useEffect(() => {

    const callAPI =  async (param) => {
        await axios.get("https://gamehubx.com/api/v1/user-profile/"+param+"/") 
                   .then(res => {console.log(res.data);
                    setprofilepicture(res.data.image);
                    setusername(res.data.username);
                    setbalance(res.data.amount)
                    setcredits(res.data.credits)
                    })
                   .catch(e=> console.log(e))

    }
    var id = localStorage.getItem("userdata")
    if (id) {
      callAPI(id)
    }
  }, [])

  
  console.log(width)
  return (
      <Router>
        <ContextAPI.Provider value={[profilepicture, username, balance, credits]}>
        {
          width> '800' ?
          <Navbar></Navbar>
          :
          <MobileNavbar></MobileNavbar>
          
        }
        <Switch>
          <Route exact path='/'  ><Home width={width}></Home></Route>
          <Route path='/alltournament'  ><AllTournaments width={width}></AllTournaments></Route>
          <Route path="/tournament/:gametitle/:gameId"><IndTour width={width}/></Route>
          <Route path='/games'  ><AllGames width={width}></AllGames></Route>
          <Route path='/ticket'  ><Tickets></Tickets></Route>
          <Route path='/signup'  ><SignUp history={history} width={width}></SignUp></Route>
          <Route path='/success'  ><AfterSignup></AfterSignup></Route>
          <Route path='/login'  ><Login width={width} history={history}></Login></Route>
          <Route path='/fbglogin'><FbGlogin history={history}></FbGlogin></Route>
          <Route path='/settings/:id'  ><Settings width={width}></Settings></Route>
          <Route path='/depositfunds'  ><DepositFunds width={width}></DepositFunds></Route>
          <Route path='/paymentmethod'  ><PaymentMethod width={width}></PaymentMethod></Route>
          <Route path='/buycredits'  ><BuyCredits width={width}></BuyCredits></Route>  
          <Route path='/matches'  ><Matches width={width}></Matches></Route>
          <Route path='/champs'  ><Champions></Champions></Route>
          <Route path='/profile/:id'  > <MainPro width={width} /> </Route>
          <Route path='/:game/:ind'  ><IndividualGame width={width}></IndividualGame></Route>
          <Route path='/faq'><Faq></Faq></Route>
        </Switch>
        <Footer></Footer>
        </ContextAPI.Provider>
      </Router>
  );
}

export default App;
