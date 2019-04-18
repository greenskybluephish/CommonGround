import React, { Component } from "react";


export default class ArtistCard extends Component {
  render() {
    return (
      <div key={this.props.artist.artistId} className="card">
        <div className="card-body">
          <img src={this.props.artist.image} className="card-img" alt="Artist" />
          <h5 className="card-title">{this.props.artist.name}</h5>
        </div>
      </div>
    );
  }
}
