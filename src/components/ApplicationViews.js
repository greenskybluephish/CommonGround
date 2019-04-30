import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import TopArtists from "./playlist/TopArtists";
import Login from "./authentication/Login";
import API from "../modules/APIManager";
import "./applicationviews.css";
import Shared from "./share/Shared"
import Weather from "./weather/Weather"
import { withRouter } from 'react-router'

class ApplicationViews extends Component {
  state = {
    isLoggedIn: false,
    allUsers: [],
    currentUser: [],
    userId: [],
    secondUser: ""
  };

  isAuthenticated = () => sessionStorage.getItem("access_token") !== null;

  componentDidMount() {
    const username = sessionStorage.getItem("username");
    const userId = sessionStorage.getItem("userId");
    if (username) {
      this.setState({
        currentUser: username,
        isLoggedIn: true,
        userId: userId
      });
    }
    if (!this.state.isLoggedIn) {
      API.get.JSONUsers().then(userArray => {
        this.setState({ allUsers: userArray });
      });
    }
  }

  secondUserAdd = (id) => {
    this.setState({secondUser: id})
    this.props.history.push("/shared")
  }



  authenticateUser = () => {
    window.OAuth.initialize("rKtNmq0HtvZws6tMLOJFcXiyypo");

    window.OAuth.popup("spotify", { cache: true }).done(spotify => {
      sessionStorage.setItem("access_token", spotify.access_token);
      // do some stuff with result
      spotify.me().then(data => {
        sessionStorage.setItem("username", data.name);

        this.setState({ currentUser: data.name, isLoggedIn: true });
        const registeredUser = this.state.allUsers.find(
          user => user.username === data.name
        );
        if (registeredUser) {
          this.setState({ userId: registeredUser.id });
          sessionStorage.setItem("userId", registeredUser.id);
        } else {
          API.get.spotifyTopArtists(spotify.access_token)
          .then(string => {
            const userList = {
              artistList: string,
              username: this.state.currentUser
            };
            API.post.toJSONServer("users", userList)
            .then(() => {
              API.get.JSONUsers().then(userArray => {
                const registeredUser = userArray.find(
                  user => user.username === this.state.currentUser
                )
                sessionStorage.setItem("userId", registeredUser.id)
                this.setState({ userId: registeredUser.id });
                API.get.spotifyArtistsInfo(userList.artistList, spotify.access_token)
                .then(page => {
                  let artists = page.artists;
                  const artistDetailObject = artists.map(artist => {
                    return {
                      name: artist.name,
                      artistId: artist.id,
                      image: artist.images[1].url
                    };
                  });
                  return artistDetailObject;
                }).then(artistArray => {
                  let artistObject = {
                    userId: parseInt(registeredUser.id),
                    artistDetail: artistArray
                  }
              API.post.toJSONServer("artists", artistObject)
            })
          })
        }
          )});
    
  };
})})}

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (!this.isAuthenticated()) {
              return <Redirect to="/login" />;
            } else {
              return <Redirect to="/home" />;
            }
          }}
        />
        <Route
          path="/home"
          render={() => {
            return <Home currentUser={this.state.currentUser} />;
          }}
        />
        <Route
          path="/login"
          render={() => {
            return <Login authenticateUser={this.authenticateUser} />;
          }}
        />

        <Route
          exact
          path="/topartists"
          render={() => {
            if (!this.isAuthenticated()) {
              return <Redirect to="/login" />;
            } else {
              return <TopArtists userId={this.state.userId} />;
            }
          }}
        />
                <Route
          exact
          path="/weather"
          render={() => {
            if (!this.isAuthenticated()) {
              return <Redirect to="/login" />;
            } else {
              return <Weather userId={this.state.userId} secondUserAdd={this.secondUserAdd}/>;
            }
          }}
        />
           <Route
          exact
          path="/shared"
          render={() => {
            if (!this.isAuthenticated()) {
              return <Redirect to="/login" />;
            } else {
              return <Shared userId={this.state.userId} secondUser={this.state.secondUser}/>;
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews)