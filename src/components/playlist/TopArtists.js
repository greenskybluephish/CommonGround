import React, { Component } from "react";
import "./playlist.css";
import { Container } from "reactstrap";
import API from "../../modules/APIManager";
import ArtistCard from "../artists/ArtistCard";

export default class TopArtists extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");

    API.get.JSONArtistDetail(userId)
      .then(array => this.setState({ artists: array }));
  }

  render() {
    return (
      <Container className="topArtists">
        <h1>Top Artists</h1>
        {this.state.artists.map(artist => (
          <ArtistCard key={artist.artistId} artist={artist} />
        ))}
      </Container>
    );
  }
}
