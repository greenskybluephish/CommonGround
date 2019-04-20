import React, { Component } from "react";
import "./shared.css";
import { Container, Button, Row, Col } from "reactstrap";
import API from "../../modules/APIManager";
import ArtistCard from "../artists/ArtistCard";

export default class Shared extends Component {
  state = {
    active: [],
    second: [],
    shared: [],
    onlyActive: [],
    onlySecond: []
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

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");

    API.get
      .JSONArtistDetail(userId)
      .then(array => this.setState({ active: array }));
    API.get.JSONArtistDetail(3).then(array => this.setState({ second: array }));
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="shared">
        <h1>Shared Artists</h1>
        <Button onClick={this.sharedArtists}>Click to make Magic</Button>
        <div className = "fixer">
          <div className="container left">
            {this.state.onlyActive.map(artist => (
              <ArtistCard key={artist.artistId} artist={artist} />
            ))}
          </div>
          <div className="container center">
            {this.state.shared.map(artist => (
              <ArtistCard key={artist.artistId} artist={artist} />
            ))}
          </div>
          <div className="container right">
            {this.state.onlySecond.map(artist => (
              <ArtistCard key={artist.artistId} artist={artist} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
