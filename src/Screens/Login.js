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
    };
  }

  // componentDidMount(){
  //   if(this.props.location.state != undefined){
  //     console.log("the data in props",this.props.location.state.data);
  //   }
  // }

 

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
        //   var tok = localStorage.getItem("token");
        //   var user = localStorage.getItem("userdata");
        //   console.log("token from Storage", tok);
        //   console.log("user id from Storage", user);
        //window.open("/");
        window.location.href = "/";
      })
      .catch((error) => {
        // console.log(error.response.data.key);
        this.setState({ modaltext: "Credentials are not correct" });
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

  responseFacebook = (response) => {
    console.log(response);
  };

  responseGoogle = async (response) => {

    console.log(response);
    console.log(this.props.width);
    var res = response;
    console.log("access token", res.accessToken);
    if (typeof response !== undefined) {
      
      console.log("in conditions");
      await axios({
        method: "post",
        url: "https://gamehubx.com/api/v1/login/google/",
        headers: {},
        data: {
          access_token: res.accessToken,
          code: "",
        },
      })
        .then((response) => {
          console.log(response.data.user_detail);
          const routingFunction = (param) => {
            this.props.history.push({
                pathname: "/fbglogin",
                state: param
            });
        }
        routingFunction({ data: response.data.user_detail })

          // this.props.history.push({
          //   pathname: "/fbglogin",
          //   state: { data: response.data.user_detail },
          // });
        })
        .catch((error) => {
          console.log(error.response);
          console.log("Couldn't Login ");
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
          <Modal.Body>{this.state.modaltext}</Modal.Body>
          <Modal.Footer>
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
            onClick={this.compclicked}
            render={(renderProps) => (
              <button className="social-login-fb" onClick={renderProps.onClick}>
                <img src="/icons/fb.png" height="20px" alt="fb"></img>
                <div className="title">Continue with Facebook</div>
              </button>
            )}
          />

          <GoogleLogin
            clientId={
              "431419828404-n5tfmqqqlkohd0luqiu8rsqrs657fshk.apps.googleusercontent.com"
            }
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="social-login-google"
            style={{
              padding: "0px 0px",
              margin: "0px 0px",
              backgroundColor: "black",
            }}
            icon={true}
          >
            {/* <button className=" content-center" >
              <img src="/icons/google.png" height="20px" alt="fb"></img>
              <div className="title" style={{ paddingLeft: "25px" }}>
                Continue with Google
              </div>
            </button> */}
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
            <div className="forgot">Forgot Password?</div>
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
