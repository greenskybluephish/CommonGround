import React, { Component } from "react";
import { Col, Button } from "reactstrap";

export default class PlaylistCard extends Component {

  handleClick = (event) => {
    this.props.removeArtist(event)
  }

  



  render() {
    return (
      <Col className="animated fadeIn flip-card">
        <div className="flip-card-inner" >
          <div className="flip-card-front">
          <img  className= "flip-image" src={this.props.artist.image} alt="artist"></img>
          </div>
          <div className="flip-card-back">
          <h2>{this.props.artist.name}</h2> 
          <Button id={this.props.artist.artistId} onClick={this.handleClick}>Remove Artist</Button>
        </div>
      </div>
    </Col>
    );
  }
}
