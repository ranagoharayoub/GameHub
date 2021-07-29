import React, { Component } from "react";
import "./Login.css";
import "./Models.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { Button, Modal } from "react-bootstrap";

// /icons/fb.png

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      show: false,
      modaltext: "",
      forgot: false,
    };
  }

  // componentDidMount(){
  //   if(this.props.location.state != undefined){
  //     console.log("the data in props",this.props.location.state.data);
  //   }
  // }

  forgotPass = () =>{
    this.setState({...this.state, show: true, forgot: true, modaltext:''})
  }

  passwordReset = async() =>{

    const URL = "https://gamehubx.com/api/v1/auth/password/reset/"
    const data = JSON.stringify({
      "email": this.state.email
    })
    const headers = {
      "Content-Type": "application/json"
    }
    await axios.post(URL, data, {
      headers: headers
    }).then((res) => {console.log(res);
      this.setState({...this.state, forgot: false, modaltext:`${res.data.detail} at ${this.state.email}`})
       })
      .catch((error)=> {console.log(error.response.data.email[0]);
        this.setState({...this.state,modaltext:`${Object.keys(error.response.data)}: ${Object.values(error.response.data)}`})
      })
    console.log('email', this.state.email)
    
  }
 

  login = async (e) => {
    e.preventDefault();
    console.log("login button", this.state.email, this.state.pass);
    await axios({
      method: "post",
      url: "https://gamehubx.com/api/v1/login/",
      headers: {},
      data: {
        email: this.state.email,
        password: this.state.pass,
      },
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.key);
        localStorage.setItem("userdata", response.data.user_detail.id);
        localStorage.setItem("name", response.data.user_detail.username);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.non_field_errors[0]);
        this.setState({ modaltext: error.response.data.non_field_errors[0]});
        this.setState({ show: true });
      });
  };

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state.email, this.state.pass);
      }
    );
  }

  responseFacebook = async (response) => {
    console.log(response);

    console.log("access token", response.accessToken);
    if (typeof(response.accessToken) !== "undefined") {
      
      console.log("in conditions");
      await axios({
        method: "post",
        url: "https://gamehubx.com/api/v1/login/facebook/?type=login",
        headers: {},
        data: {
          access_token: response.accessToken,
          code: "",
        },
      })
        .then((res) => {
          console.log(res);
            this.props.history.push({
                pathname: "/signup",
                state: { 
                  data: res.data.user_detail,
                  key: res.data.key,
                  isGoogle: false,
                 }
        })
      }
        )
        .catch((error) => {
          console.log(error.response);
          console.log('could not login');
          this.setState({ modaltext: error.response.data.non_field_errors[0]});
          this.setState({ show: true });
        });
    }
  };

  responseGoogle = async (response) => {

    console.log(response);
    
    console.log("access token", response.accessToken);
    if (typeof(response.accessToken) !== "undefined") {
      
      console.log("in conditions");
      await axios({
        method: "post",
        url: "https://gamehubx.com/api/v1/login/google/?type=login",
        headers: {},
        data: {
          access_token: response.accessToken,
          code: "",
        },
      })
        .then((res) => {
          console.log(res.data);
            this.props.history.push({
                pathname: "/signup",
                state: { 
                  data: res.data.user_detail,
                  key: res.data.key,
                  isGoogle: true,
                 }
        })
      }
        )
        .catch((error) => {
          console.log(error.response);
          console.log('could not login');
          this.setState({ modaltext: error.response.data.non_field_errors[0]});
          this.setState({ show: true });
        });
    }
  };

  compclicked = () => {
    console.log("clicked");
  };

  render() {
    const {width, history} = this.props
    console.log(width,history)
    return (
      <div className="login-cont">
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modaltext}
            <form  style={this.state.forgot? {display:'flex' ,alignItems:'center', width:"100", justifyContent:'center'}: {display:"none"}} onSubmit={()=>alert("Email sent")}>
              {/* <label style={{color:'white'}} for='email'>Email</label> */}
              <input
                             
                             name="email"
                             required
                             type="email"
                             onChange={(e) => this.handleChange(e)}
                             placeholder="Your Registered Email" style={{paddingLeft:"10px",backgroundColor:"transparent", height:"6vh", width:'75%', border:"1px solid white", borderRadius: '5px'
            }}>

            </input>
              
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={()=>this.passwordReset()} style={this.state.forgot? {height:'35px', padding:'0px 10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'small', fontweight:'bold'}:{display:'none'}} type='submit'>Submit</Button>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="login-sect">
          <div className="title">SIGN IN</div>
          <div className="subtitle">
            Not a member Yet?
            <Link
              to="/signup"
              style={{
                color: "#F69204",
                marginLeft: "5px",
                textDecoration: "none",
              }}
            >
              Join Free!
            </Link>
          </div>

          <FacebookLogin
            appId="298750325266295"
            autoLoad={false}
            callback={this.responseFacebook}
            fields="name,email,picture"
            onClick={this.compclicked}
            render={(renderProps) => (
              <button className="social-login-fb" onClick={renderProps.onClick}>
                <img src="/icons/fb.png" height="20px" alt="fb"></img>
                <div className="title" style={{ paddingLeft: "20px", color:'white' }}>Continue with Facebook</div>
              </button>
            )}
          />

          <GoogleLogin
            clientId={
              "431419828404-n5tfmqqqlkohd0luqiu8rsqrs657fshk.apps.googleusercontent.com"
            }
            render={renderProps => (
              <button style={{backgroundColor: 'white'}} className="social-login-google"  onClick={renderProps.onClick} >
                <img src="/icons/google.png" height="20px" alt="google" ></img>
                <div className="btn-title" style={{ paddingLeft: "20px", color:'black' }}>
                Continue with Google
                </div>
                </button>
            )}
        
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="social-login-google"
            icon={false}
          >
          </GoogleLogin>
          <form className="form-sect" onSubmit={(e) => this.login(e)}>
            <label className="label">Email Address</label>
            <input
              id="inputcolor"
              className="input-fields"
              name="email"
              required
              type="email"
              onChange={(e) => this.handleChange(e)}
            ></input>
            <label className="label">Password</label>
            <input
              id="inputcolor"
              className="input-fields"
              name="pass"
              required
              type="password"
              onChange={(e) => this.handleChange(e)}
            ></input>
            <div onClick={()=>{this.forgotPass()}} className="forgot">Forgot Password?</div>
            <div className="check-policy">
              <input className="checkbox" type="checkbox"></input>
              <div className="checkbox-label">Remember me on this Device</div>
            </div>
            <button
              type="submit"
              className="input-fields"
              // onClick={(e) => this.login(e)}
              style={{
                marginTop: "50px",
                backgroundColor: "#F69204",
                fontFamily: "Arial",
                fontSize: "large",
                fontWeight: "600",
                border: "none",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login)
