import React, { Component } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export default class ArtistCard extends Component {
  state = {
    popoverOpen: false
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img
            src={this.props.artist.image}
            className="card-img"
            alt="Artist"
          />
          <h5 className="card-title">
            <Button
              id={"a" + this.props.artist.artistId.slice(0, 5)}
              type="button"
            >
              {this.props.artist.name}
            </Button>
          </h5>
          <Popover className="lg"
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target={"a" + this.props.artist.artistId.slice(0, 5)}
            toggle={this.toggle}
          >
            <PopoverHeader>{this.props.artist.name}</PopoverHeader>
            <PopoverBody>Hello</PopoverBody>
          </Popover>
        </div>
      </div>
    );
  }
}
