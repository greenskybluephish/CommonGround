import React, { Component } from 'react'
import "./playlist.css"
import { Container } from 'reactstrap'
import API from "../../modules/APIManager"
import ArtistCard from "../artists/ArtistCard"

export default class TopArtists extends Component {

  state = {
    artists: []
};


componentDidMount() {

    API.get()
    .then(page => {
      let artists = page.items

    const newState = artists.map(artist => {
          return {
              "name": artist.name,
              "artistId": artist.id,
              "image": artist.images[1].url
          }
    
      })
      return newState })
      .then((array)=> this.setState({"artists": array})) 

  }


    render () {
        return (
          <Container className="home">
          <h1>Top Artists</h1>
        {
         this.state.artists.map(artist =>
          <ArtistCard artist={artist}>

          </ArtistCard>)
        }
        </Container>
        )
    }
}