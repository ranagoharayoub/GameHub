import React, { useState, useEffect, useContext } from "react";
import './Profile.css'
//import profilepicture from "../Images/random-user-test.png";
// import facebook from "../Images/facebook.png";
// import instagram from "../Images/instagram.png";
// import tiktok from "../Images/tik-tok.png";
// import twitter from "../Images/twitter.png";
import {ContextAPI} from '../../Context/Context'
import axios from "axios";
import { useParams } from 'react-router-dom';
import {AddAPhotoOutlined} from "@material-ui/icons";
import { Button, Modal} from "react-bootstrap";

function Profile({width}) {
  const [show, setShow] = useState(false);
  const [modaltext, setmodaltext] = useState("");
  const [textUnderline, setTextUnderline] = useState("");
  const [textUnderlined, setTextUnderlined] = useState("");
  const [data, setdata] = useState([]);
  const [gamedata, setgamedata] = useState(null);
  const [profilepic, setprofilepic] = useState(false)

  const [sec, setsec] = useState(0);
  // eslint-disable-next-line
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);
  const [day, setday] = useState(0);

  const profilepicture = useContext(ContextAPI)
  console.log('Contextprofile',profilepicture)

  const params = useParams()  
  console.log("PARASM in pro",params)

  const [gamestate, setgamestate] = useState({
    id: 1,
    name: "newtest",
    game_title: "FIFA 21",
    game_image: "https://gamehubx.com/media/games/fifa21n.png",
    tournament_entered: 1,
    total_earnings: 0,
    last_updated: "2021-06-19T10:19:58.918560Z",
    created: "2021-06-19T10:19:58.918585Z",
    kills: 5,
    game_played: 5,
    user: 7,
    game: 4,
  });


  useEffect(() => {
    const callAPI =  async () => {
       await axios
        .get("https://gamehubx.com/api/v1/user-profile/"+params.id+"/")
        .then((res) => {
          console.log(res.data);
          setdata(res.data);
          
          // setgamedata(res.data.overview);
          // console.log("this is my data and overview", data);
          // console.log("this is my data and overview", gamedata);
         
        });
    }
    callAPI()


    const callAPI2 = async () =>{
      axios.get("https://gamehubx.com/api/v1/tournament/?user="+params.id)
      .then((res)=>{
        console.log(res.data);
        setgamedata(res.data);
        setTextUnderlined(res.data[0].title)
        })
      .catch((error)=> console.log(error))
    }
    callAPI2()
    // eslint-disable-next-line
  }, [profilepic])



  React.useEffect(
    function effectFunction() {
      var dt1 = new Date(data.last_login);
      console.log("date coming from data on load", dt1.toLocaleDateString());
      var dt2 = new Date();
  
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      setmin(Math.abs(Math.round(diff)));
      console.log("diff in minutes", Math.abs(Math.round(diff)));
  
      var diff2 = (dt2.getTime() - dt1.getTime()) / 1000;
      diff2 /= 60 * 60;
      console.log("diff in hours", Math.abs(Math.round(diff2)));
      sethour(Math.abs(Math.round(diff2)));
      console.log("diff in days", Math.abs(Math.floor(diff2 / 24)));
      setday(Math.abs(Math.floor(diff2 / 24)));
      setsec(hour * 60); 
    },
    // eslint-disable-next-line
    [data]
  );

  function changestate(data) {
    // console.log("change state function");
    setgamestate(data);
  }

   const filehandler = async(e) =>{
          console.log('success', e.target.files[0]);
          if (e.target.files[0]) {
          var token = localStorage.getItem('token');
          var id = localStorage.getItem('userdata')
          const headers = ({
              "Authorization" : "Token " + token,
              "Content-Type":"multipart/form-data",            
          })

          const fd = new FormData();
          fd.append("image", e.target.files[0], e.target.files[0].name);

          setShow(true);
          setmodaltext("Uploading Image")

          await axios.patch("https://gamehubx.com/api/v1/user-profile/"+id+"/", fd, {
            headers: headers,
          }).then(res=> {console.log(res); setprofilepic(true); setmodaltext("Successfully Image Uploaded")})
            .catch(Error => {console.log(Error.response); setmodaltext("Image could not uploaded")})
          } else {
            console.log('pic not selected')
          }
   }
   var img = "";
   gamedata && gamedata.map((data)=> data.title === textUnderlined? img = data.image : null)

  return (
    <div style={width<'800' ?{overflowX:'hidden'}:null} className="flex flex-col bg-darkGray w-full md:w-full">
       <Modal  backdrop="static"
        keyboard={false}  
        show={show} 
        onHide={()=> setShow(false)}
      >
        <Modal.Header style={{ backgroundColor: "#4A4747"}}>
          <Modal.Title style={{ backgroundColor: "#4A4747"}}></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#4A4747"}}>{modaltext}</Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#4A4747"}}>
          <Button variant="secondary" onClick={()=> setShow(false)} >Close</Button>
        </Modal.Footer>
      </Modal>
      <div className="flex justify-center md:justify-start md:w-full">
        <img
          src={data.image? data.image : 'icons/blank-profile-picture.webp'}
          // src=''
          alt=""
          className="rounded-sm h-1/3 w-1/3 md:h-48 md:w-48 -ml-20 md:ml-11 -mt-9 z-20 img-styling"
          // className="img-styling"
        />
        <div className="md:flex md:flex-row md:w-full md:justify-between md:self-center">
          <div className="ml-7 flex flex-col -mr-16 md:mt-4">
            <h2 className="text-white text-2xl font-semibold md:text-6xl">
              {data.username}
            </h2>
            
            <p className="text-xs text-textGray md:text-base">
              {data.length >0 ? 
              <>  
              {min < 1 && sec < 60  &&  <p> Last Login {sec} seconds ago </p>}
              {min > 0 && min < 60 && <p> Last Login {min} minutes ago </p>}
              {min > 60 && hour < 24 && <p> Last Login {hour} hours ago </p>}
              {hour > 24 && day <= 1 && <p> Last Login {day} day ago </p>}
              {day > 1 && <p> Last Login {day} days ago </p>}
              </>
              :
              <> 
              {min < 1 && sec < 60  &&  <p> Last Login {sec} seconds ago </p>}
              {min > 0 && min < 60 && <p> Last Login {min} minutes ago </p>}
              {min > 60 && hour < 24 && <p> Last Login {hour} hours ago </p>}
              {hour > 24 && day <= 1 && <p> Last Login {day} day ago </p>}
              {day > 1 && <p> Last Login {day} days ago </p>} 
              </> }
              
            </p>
            <input id='inputfile' style={{height:"0px", overflow:"hidden"}} type='file' onChange={(e)=>{console.log(e.target.files[0]); if (e.target.files[0]) {
              filehandler(e)
            }}} ></input>

            <AddAPhotoOutlined  onClick={()=>document.getElementById('inputfile').click()} style={{cursor:'pointer', color:'white'}} fontSize='large'></AddAPhotoOutlined>
            {/* <div className="flex w-full mt-2 md:hidden">
              <img src={facebook} alt="" className="h-3 w-3 mr-2" />
              <img src={instagram} alt="" className="h-3 w-3 mr-2" />
              <img src={tiktok} alt="" className="h-3 w-3 mr-2" />
              <img src={twitter} alt="" className="h-3 w-3 mr-2" />
            </div>
          </div>
          <div className="hidden md:block md:text-white md:self-center">
            <div className="flex w-full mt-2 mr-20">
              <img src={facebook} alt="" className="h-6 w-6 mr-2" />
              <img src={instagram} alt="" className="h-6 w-6 mr-2" />
              <img src={tiktok} alt="" className="h-6 w-6 mr-2" />
              <img src={twitter} alt="" className="h-6 w-6 mr-2" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="md:bg-bodySection md:pb-11 md:mt-4">
        <div className="flex mx-8 mt-10 font-thin ">
          <h4
            className={
              textUnderline === "Overview"
                ? "mr-5 border-b-2 border-darkOrange text-white rounded-b-sm z-20  md:text-xl md:pb-2"
                : "mr-5  text-white  md:text-xl md:pb-2"
            }
            onClick={() => {
              setTextUnderline("Overview");
            }}
          >
            Overview
          </h4>

        </div>
        <div className="h-0.5 -mt-0.5 mx-8 bg-scrollCol rounded-l-full rounded-r-full"></div>
        <h2 className="text-white text-2xl font-semibold ml-10 mt-7">
          Game Statistics
        </h2>
        <p className="text-white text-xs font-thin ml-10">
          Player game specific statistics
        </p>
        <div className="flex mx-8 mt-7">
          {/* my map starting of game title */}
          {gamedata && gamedata.map((ent) => {
            return (
              <h4
                className={
                  textUnderlined === ent.title
                    ? "mr-5 border-b-2 border-neonGreen text-white rounded-b-sm md:pb-2 z-20 text-sm font-thin md:text-xl transition-colors ease-in duration-300 cursor-pointer"
                    : "mr-5  text-white text-sm font-thin md:text-xl md:pb-2 cursor-pointer"
                }
                onClick={() => {
                  setTextUnderlined(ent.title);
                  changestate(ent);
                }}
              >
                {ent.title}
              </h4>
            );
          })
          }
          
        </div>

        <div className="h-0.5 -mt-0.5 mx-8 bg-scrollCol rounded-l-full rounded-r-full"></div>
        <div>
 

          <div className="mx-8 flex mt-3 pb-10 md:pb-0 md:bg-darkGray md:mt-10">
            <img
              src={img}
              alt=""
              style={{ flex: "0.15" }}
              className="h-16 w-24 md:h-52 md:w-52 mr-2 lg:h-52 lg:w-44 xl:h-80 xl:w-48"
            />

            <div
              className="flex flex-col md:justify-center"
              style={{ flex: "0.60" }}
            >
              <div className="flex justify-evenly -mr-10">
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.tournament_entered}
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.game_played}
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.total_earnings}
                </h1>
              </div>
              <div className="flex justify-evenly -mr-7 ml-5 md:ml-0 md:-mr-5">
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Tournaments Entered
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg md:-ml-9">
                  Games Played
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Total Earnings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
