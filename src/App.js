import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./components/ApplicationViews"



class App extends Component {

    // state = {
    //     filtered: {
    //         owners: [],
    //         employees: [],
    //         locations: [],
    //         animals: []
    //     }
    // }; 

    
    // searchButton = (search) => {

    //     const newSearchState = {
    //         filtered: {
    
    //         }
    //     }
        
    //     fetch(`http://localhost:5002/owners/?q=${search}`)
    //         .then(r => r.json())
    //         .then(owners => newSearchState.filtered.owners = owners)
    //         .then(() => fetch(`http://localhost:5002/employees/?q=${search}`)
    //         .then(r => r.json()))
    //         .then(employees => newSearchState.filtered.employees = employees)
    //         .then(() => fetch(`http://localhost:5002/animals/?q=${search}`)
    //         .then(r => r.json()))
    //         .then(animals => newSearchState.filtered.animals = animals)
    //         .then(() => fetch(`http://localhost:5002/locations/?q=${search}`)
    //         .then(r => r.json()))
    //         .then(locations => newSearchState.filtered.locations = locations)
    //         .then(() => {
            
    //             this.setState(newSearchState)})
    // }
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default App
