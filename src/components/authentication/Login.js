import React, { Component } from 'react';
import { withRouter } from 'react-router'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Button, Container } from 'reactstrap';
import "./login.css"
// import API from "../../modules/APIManager"

class Login extends Component {

  // Downloads oauth.js from CDN, pretty much like adding external scripts
  componentDidMount () {
    const oauthScript = document.createElement("script");
    oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  
  }

  handleClick = (e) => {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    this.props.authenticateUser()


      this.props.history.push("/home")
  }

  

  render() {
    return (
    <Container className="login">
    
    <h1 className="login-heading">Welcome to Common Ground</h1>
    <h3 className="login-heading">Please log in to continue</h3>
    <img
          id="spotify-login"
          alt="login"
          src={require(`../../images/320px-Spotify_logo_horizontal_black.jpg`)}
          onClick={this.handleClick}
        />
           </Container>
    )}
}

export default withRouter(Login)