import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function HeroFade() {
  const [data, setdata] = useState([]);
  const params = useParams()  
  

  useEffect(() => {
    const callAPI = async () => {
      await axios
        .get("https://gamehubx.com/api/v1/user-profile/" + params.id+"/" )
        .then((res) => {
          setdata(res.data);
        });
    }
    callAPI()
    // eslint-disable-next-line
  }, [data])


  const uploadHandler = async(e) =>{
 
    console.log('success',e.target.files[0])
    
    if (e.target.files[0]) {
      var token = localStorage.getItem("token");
      var id = localStorage.getItem("userdata");
      
      const headers = {
        "Authorization": "Token "+token,
        "Content-Type":"multipart/form-data",
      }
      const fd = new FormData()
      fd.append('cover_image', e.target.files[0], e.target.files[0].name)
  
      await axios.patch("https://gamehubx.com/api/v1/user-profile/" + id+"/",fd, {
        headers: headers
      } ).then((res)=> console.log('uploaded success',res)).catch((error)=> console.log('uploaded error',error))
    } else {
      console.log('image is not selected')
    }
  }

  return (
    <div className="relative w-full h-40 md:h-72">
      <img src={data.cover_image} alt="" className="w-full h-full" />
      <div className="absolute top-0 bg-black h-full w-full text-white opacity-70"></div>
      <div style={{height:"0px", overflow:"hidden"}}>
          <input id="fileInput"  type='file' onChange={(e)=>{console.log(e.target.files[0]); if (e.target.files[0]) {
            uploadHandler(e)
          }} } style={{height:"0px", overflow:"hidden"}} ></input>
      </div>
      {/* <input type='file' onChange={(e)=>{console.log(e.target.files[0]); setimage(e.target.files[0])} } className="absolute top-6 left-5 text-white ring-1 ring-white rounded-none py-1 px-1 text-xs font-thin focus:outline-none md:px-4 md:py-3 md:text-base md:mr-14 md:mt-5  md:hover:text-black transition-all ease-in duration-200"></input> */}
      <button onClick={()=>document.getElementById("fileInput").click()} className="absolute top-6 right-2 text-white ring-1 ring-white rounded-none py-1 px-1 text-xs font-thin focus:outline-none md:px-4 md:py-3 md:text-base md:mr-14 md:mt-5 md:hover:bg-white md:hover:text-black transition-all ease-in duration-200">
        Upload New Image
      </button>
    </div>
  );
}

export default HeroFade;
