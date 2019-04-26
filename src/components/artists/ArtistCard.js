import React, { Component } from "react";
import { Button } from "reactstrap";
// import { easing, tween, styler } from "popmotion"

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

          {/* <Popover className="lg"
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target={"a" + this.props.artist.artistId.slice(0, 5)}
            toggle={this.toggle}
          >
            <PopoverHeader>{this.props.artist.name}</PopoverHeader>
            <PopoverBody>Hello</PopoverBody>
          </Popover> */}
        </div>
      </div>
    );
  }
}