import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
export default class Scanner extends Component {

  state = {
      delay: false,
      result: "",
    }
 

  handleScan = (data) => {
    this.setState({
      result: data,
    })
  }
  handleError = (err) => {
    console.error(err)
  }

  componentDidUpdate() {
    if (!this.state.result === "") {
      this.props.secondUserAdd(this.state.result)
    }
  } 



  render(){
    const previewStyle = {
      height: 480,
      width: 640,
    }
    
   


    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={"front"}
          />
        <h2>{this.state.result}</h2>
      </div>
    )
  }
}