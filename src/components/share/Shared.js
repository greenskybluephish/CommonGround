import React, { Component } from "react";
import "./shared.css";
import { Button, Row, Container } from "reactstrap";
import API from "../../modules/APIManager";
import ArtistCard from "../artists/ArtistCard";
import { easing, tween, styler } from "popmotion";
import PlaylistCard from "../artists/PlaylistCard";

export default class Shared extends Component {
  state = {
    active: [],
    second: [],
    shared: [],
    onlyActive: [],
    onlySecond: [],
    playlist: []
  };

  sharedArtists = (event) => {
    const target = event.target.id
    if (target === "magic") {

    const active = this.state.active;
    const second = this.state.second;
    const shared = active.filter(artist =>
      second.find(art => art.artistId === artist.artistId)
    );

    const onlyActive = active.filter(
      artist => !second.find(art => art.artistId === artist.artistId)
    );
    const onlySecond = second.filter(
      artist => !active.find(art => art.artistId === artist.artistId)
    );
    this.setState({
      shared: shared,
      onlyActive: onlyActive,
      onlySecond: onlySecond
    });
    document.getElementById(target).firstChild.textContent = "Make a Playlist";
    
    event.target.id = "makePlaylist";
  } else if (event.target.id === "makePlaylist"){
      this.makePlaylist();
    }
  }
  

  makePlaylist = () => {
    const access_token = sessionStorage.getItem("access_token");
    const spotifyId = sessionStorage.getItem("spotifyId");
    const artistsForPlaylist = this.state.playlist.map(p => p.artistId).join();
    let wait = Promise.all([API.createPlaylist(access_token, spotifyId, "Demo Day Playlist"),
    API.get.SpotifyRecs(artistsForPlaylist, access_token)]).then(promise => {
      API.postPlaylistTracks(promise[1], access_token, promise[0]).then(data => {
        API.get.spotifyUserDevices(access_token, data).then(data=> {
          API.get.transferPlayback(data[0], access_token, data[1]).then(data =>{
            API.get.startPhonePlayback(data[0], access_token, data[1]);
          })
      })
    });
    });
  }





  tweener = event => {
    if (this.state.playlist.length < 5) {
    const target = event.target.parentNode.parentNode;
    target.classList.add("outFront");
    let image = event.target.previousSibling;
    const allArtists = this.state.active.concat(this.state.onlySecond)
    const artistObject = allArtists.find(
      artObject => artObject.artistId === target.id
    );  

    this.setState({ playlist: this.state.playlist.concat(artistObject) });
    setTimeout(function(){ target.classList.add("display-none")}, 100);
    image.classList.add("outFront");

  }
  };

//this.props.secondUser

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");

    API.get
      .JSONArtistDetail(userId)
      .then(array => this.setState({ active: array }));
    API.get.JSONArtistDetail(4).then(array => this.setState({ second: array }));
  }

  componentDidUpdate() {
    if (this.state.playlist.length === 5) {

    }
  }

  removeArtist = (event) => {
    const target = event.target.name;
    console.log(target);
    const addDisplay = document.getElementById(target);
    addDisplay.classList.remove("display-none", "outFront");
    const newState = this.state.playlist.filter(artistObject => {
      return artistObject.artistId !== target
    }); this.setState({playlist: newState})
  }

  render() {
    return (
      <div className="shared">
        <h1>Shared Artists</h1>
        <Button id="magic" onClick={this.sharedArtists}>Click to make Magic</Button>
        <Button id="makePlaylist" onClick={this.makePlaylist}>Click to make Magic</Button>
        
        <Row className="playlist">

          {this.state.playlist.map(artist => (
             <PlaylistCard
                key={artist.artistId}
                artist={artist}
                removeArtist={this.removeArtist}
              />
            ))}
            </Row>
         
          
         
        <div className="fixer">
        <div className="container order-sm-1 center ">
            {this.state.shared.map(artist => (
              <ArtistCard
                key={artist.artistId}
                artist={artist}
                tweener={this.tweener}
              />
            ))}
          </div>

          <div className="container left">
            {this.state.onlyActive.map(artist => (
              <ArtistCard
                key={artist.artistId}
                artist={artist}
                tweener={this.tweener}
              />
            ))}
          </div>

          <div className="container order-sm-3 right">
            {this.state.onlySecond.map(artist => (
              <ArtistCard
                key={artist.artistId}
                artist={artist}
                tweener={this.tweener}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
