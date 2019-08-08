import React, { Component } from "react";
import { Button } from "reactstrap";


export default class ArtistCard extends Component {
  state = {
    popoverOpen: false
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  handleSubmit = (event) => {
    this.props.tweener(event)
    }
asd



  render() {
    return (
      <div className="card" id={this.props.artist.artistId}>
        <div className="card-body">
          <img
            src={this.props.artist.image}
            className="card-img"
            alt="Artist"
          />
            <Button onClick={this.handleSubmit}
              id={"a" + this.props.artist.artistId.slice(0, 5)}
              type="button"
            >
              {this.props.artist.name}
            </Button>

        </div>
      </div>
    );
  }
}
