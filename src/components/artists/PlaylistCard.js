import React, { Component } from "react";
import { Col, Button } from "reactstrap";

export default class PlaylistCard extends Component {

  handleClick = (event) => {
    this.props.removeArtist(event)
  }

  



  render() {
    return (

    <div className="card" id={this.props.artist.artistId}>
    <div className="card-body">
    <img src={this.props.artist.image}
        className="card-img"
        alt="Artist" />
    <Button name={this.props.artist.artistId} onClick={this.handleClick}>Remove Artist</Button>

    </div>
  </div>

    );


  }
}
