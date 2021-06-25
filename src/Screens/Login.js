import React, { Component } from 'react'
// import { useHistory } from "react-router-dom";
import './Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { withRouter } from 'react-router';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          pass: "",
        };
      }

    

    login = async (e) => {
        e.preventDefault();
        console.log("login button",this.state.email, this.state.pass);
        await axios({
            method: "post",
            url: "https://gamehubx.com/api/v1/login/",
            headers: {},
            data: {
              email: this.state.email,
              password: this.state.pass
            },
          })
            .then((response) => {
              //console.log(response.data);
              localStorage.setItem('token', response.data.key);
              localStorage.setItem('userdata', response.data.user_detail.id);
            //   var tok = localStorage.getItem("token");
            //   var user = localStorage.getItem("userdata");
            //   console.log("token from Storage", tok);
            //   console.log("user id from Storage", user);
               //window.open("/");
               window.location.href = "/"
            })
            .catch((error) => {
              //console.log(error.response.data.key);
              alert("credentials not correct");
              
            });


    }

    handleChange(e) {
        this.setState(
          {
            [e.target.name]: e.target.value,
          },
          () => {
            console.log(
              this.state.email,
              this.state.pass,
            );
          }
        );
      }
    

    render() {
        return (
            <div className='login-cont'>
                <div className='login-sect'>
                    <div className='title'>SIGN IN</div>
                    <div className='subtitle'>Not a member Yet?<Link to='/signup' style={{color:'#F69204', marginLeft:'5px', textDecoration:'none'}}>Join Free!</Link></div>
                    <div className='social-login-fb'>
                        <img src='/icons/fb.png' height='20px' alt='fb'></img>
                        <div className='title'>Continue with Facebook</div>
                    </div>
                    <div className='social-login-google' style={{backgroundColor:'white'}}>
                        <img src='/icons/google.png' height='20px' alt='fb'></img>
                        <div className='title'>Continue with Google</div>
                    </div>
                    <form className='form-sect'>
                        <label className='label'>Email Address</label>
                        <input className='input-fields' name="email" required type='email' onChange={(e) => this.handleChange(e)}></input>
                        <label className='label'>Password</label>
                        <input className='input-fields' name="pass" required type='password' onChange={(e) => this.handleChange(e)}></input>
                        <div className='forgot'>Forgot Password?</div>
                        <div className='check-policy'>
                                <input className='checkbox' type='checkbox'></input>
                                <div className='checkbox-label'>Remember me on this Device</div>
                        </div>
                        <button className='input-fields'
                        onClick ={(e) => this.login(e)} 
                        style={{marginTop:'50px', backgroundColor:'#F69204', fontFamily:'Arial', fontSize:'large', 
                        fontWeight:'600', border:'none'}} >Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
