import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { Route } from "react-router-dom";
import Shared from "../share/Shared"

export default class Scanner extends Component {

  state = {
      delay: false,
      result: ""
    }
 

  handleScan = (data) => {
    this.setState({
      result: data,
    })
  }
  handleError = (err) => {
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 480,
      width: 640,
    }
    if (this.state.result === "") {
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={"rear"}
          />
        <h2>{this.state.result}</h2>
      </div>
    )
  } else {
    return (           
     <Route exact
    path="/shared"
    render={() => {
        return <Shared userId={this.state.userId} secondUser={this.state.result} />;
      }}
    
  />
    )}
}
}