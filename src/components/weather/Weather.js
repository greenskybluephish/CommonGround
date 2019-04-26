import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
export default class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: "",
    }
 
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }

  componentDidUpdate() {
    if (!this.state.result === "") {
      this.props.secondUserAdd(this.state.result)
    }
  } 

  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}

          />
        <h2>{this.state.result}</h2>
      </div>
    )
  }
}