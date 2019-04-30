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

  sharedArtists = () => {
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
  };

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
    setTimeout(function(){ target.classList.add("display-none")}, 2600);
    image.classList.add("outFront");

  }
  };

//this.props.secondUser

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");

    API.get
      .JSONArtistDetail(userId)
      .then(array => this.setState({ active: array }));
    API.get.JSONArtistDetail(2).then(array => this.setState({ second: array }));
  }

  removeArtist = (event) => {
    const target = event.target.id;
    console.log(target);
    const newState = this.state.playlist.filter(artistObject => {
      return artistObject.artistId !== target
    }); this.setState({playlist: newState})
  }

  render() {
    return (
      <div className="shared">
        <h1>Shared Artists</h1>
        <Button onClick={this.sharedArtists}>Click to make Magic</Button>
        
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
          <div className="container left">
            {this.state.onlyActive.map(artist => (
              <ArtistCard
                key={artist.artistId}
                artist={artist}
                tweener={this.tweener}
              />
            ))}
          </div>
          <div className="container center">
            {this.state.shared.map(artist => (
              <ArtistCard
                key={artist.artistId}
                artist={artist}
                tweener={this.tweener}
              />
            ))}
          </div>
          <div className="container right">
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
