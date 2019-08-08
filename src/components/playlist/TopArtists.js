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
      .then(object => this.setState({ artists: object}));
  }

  render() {
    return (
      
      <Container className="topArtists">
        <h1>Most Listened to Artists</h1>
        <div className="content">
        {this.state.artists.map(artist => (
          <ArtistCard key={artist.artistId} artist={artist} />
        ))}
        </div>
      </Container>
    );
  }
}
