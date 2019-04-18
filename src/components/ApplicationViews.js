import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Home from './home/Home'
import TopArtists from './playlist/TopArtists'
import Login from './authentication/Login'

import "./applicationviews.css"

export default class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("access_token") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Redirect to="/home" />}
                    else {
                            return <Redirect to="/login" />
                        }}} />
                <Route path="/home" render={() => {
                    return <Home
                /> }} />
                <Route path="/login" component={Login} />

                <Route exact path="/topartists" render={() => {
                    return <TopArtists 
                      />
                }} />
            

            </React.Fragment>
        )
    }
}
